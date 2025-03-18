// src/pages/ProductDetail.js
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [reviewText, setReviewText] = useState('');
  const [reviewRating, setReviewRating] = useState(5);

  // We fetch dispensaries to show a name/link
  const [dispensaries, setDispensaries] = useState([]);

  useEffect(() => {
    // Fetch product data
    fetch('/data/products.json')
      .then((res) => res.json())
      .then((allProducts) => {
        const found = allProducts.find((p) => p.id.toString() === id);
        if (found) {
          setProduct(found);
          setReviews(found.reviews || []);
        }
      })
      .catch((err) => console.error("Error loading product", err));

    // Fetch dispensaries data
    fetch('/data/dispensaries.json')
      .then((res) => res.json())
      .then((allDispensaries) => {
        setDispensaries(allDispensaries);
      })
      .catch((err) => console.error("Error loading dispensaries", err));
  }, [id]);

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    const newReview = { rating: reviewRating, text: reviewText };
    setReviews([...reviews, newReview]);
    setReviewText('');
    setReviewRating(5);
  };

  if (!product) {
    return <div className="product-detail-loading">Loading...</div>;
  }

  // Map each ID in product.availableAt to a real dispensary object
  const dispensariesCarrying = (product.availableAt || []).map((dispId) =>
    dispensaries.find((d) => d.id === dispId)
  ).filter(Boolean);

  return (
    <div className="product-detail-page">
      <h1 className="product-detail-title">{product.strainFlavor}</h1>

      <img
        src={product.image}
        alt={product.strainFlavor}
        className="product-detail-image"
      />

      <p><strong>Type:</strong> {product.productType}</p>
      <p><strong>Category:</strong> {product.category}</p>
      <p><strong>Size:</strong> {product.size}</p>
      {/* We're not displaying quantity. If needed, you can add it here. */}

      {/* Available Dispensaries */}
      <h2 className="product-detail-subtitle">Available At:</h2>
      {dispensariesCarrying.length > 0 ? (
        <ul className="product-available-list">
          {dispensariesCarrying.map((disp) => (
            <li key={disp.id}>
              <Link to={`/dispensaries/${disp.id}`}>
                {disp.name}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p className="product-not-available">
          Not available in any dispensaries yet.
        </p>
      )}

      {/* Reviews Section */}
      <h2 className="product-detail-subtitle">Reviews</h2>
      {reviews.length === 0 ? (
        <p className="product-no-reviews">No reviews yet.</p>
      ) : (
        reviews.map((review, index) => (
          <div key={index} className="product-review-card">
            <p>Rating: {review.rating} / 5</p>
            <p>{review.text}</p>
          </div>
        ))
      )}

      {/* Submit Review */}
      <h3>Submit a Review</h3>
      <form onSubmit={handleReviewSubmit} className="product-review-form">
        <label>
          Rating:
          <select
            value={reviewRating}
            onChange={(e) => setReviewRating(parseInt(e.target.value))}
            className="product-review-rating"
          >
            <option value={5}>5</option>
            <option value={4}>4</option>
            <option value={3}>3</option>
            <option value={2}>2</option>
            <option value={1}>1</option>
          </select>
        </label>

        <label>
          Review:
          <textarea
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            className="product-review-text"
          />
        </label>

        <button type="submit" className="btn product-review-submit">
          Submit Review
        </button>
      </form>
    </div>
  );
}

export default ProductDetail;
