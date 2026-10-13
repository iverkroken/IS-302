import { useState, useRef, useEffect } from 'react'
import { createPortal } from 'react-dom'
import './ImageCarousel.css'

export default function ImageCarousel({ images, title }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isExpanded, setIsExpanded] = useState(false)
  const carouselRef = useRef(null)

  useEffect(() => {
    if (isExpanded) {
      // Lock scroll
      document.body.style.overflow = 'hidden'
    } else {
      // Unlock scroll
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isExpanded])

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    )
  }

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  const closeExpanded = () => {
    setIsExpanded(false)
  }

  if (!images || images.length === 0) {
    return null
  }

  // Et bilde kan være en streng (bare URL) eller et objekt { src, position, fit }
  // der position/fit styrer utsnittet i den store rammen (f.eks. position: 'center bottom').
  const getSrc = (image) => (typeof image === 'string' ? image : image.src)

  const currentImage = images[currentIndex]
  const currentSrc = getSrc(currentImage)
  const currentStyle = typeof currentImage === 'string' ? undefined : {
    objectPosition: currentImage.position,
    objectFit: currentImage.fit,
  }

  return (
    <>
      <div className="image-carousel" ref={carouselRef}>
        <div className="image-carousel__container">
          <div className="image-carousel__frame">
            <img
              src={currentSrc}
              alt={`${title} - Slide ${currentIndex + 1}`}
              className="image-carousel__image"
              style={currentStyle}
              onClick={() => setIsExpanded(true)}
            />
            <button
              className="image-carousel__expand-btn"
              onClick={() => setIsExpanded(true)}
              aria-label="Expand image to fullscreen"
            >
              ⛶
            </button>
          </div>

          {images.length > 1 && (
            <>
              <button
                className="image-carousel__nav-btn image-carousel__nav-btn--prev"
                onClick={goToPrevious}
                aria-label="Previous image"
              >
                ‹
              </button>
              <button
                className="image-carousel__nav-btn image-carousel__nav-btn--next"
                onClick={goToNext}
                aria-label="Next image"
              >
                ›
              </button>
            </>
          )}
        </div>

        {images.length > 1 && (
          <div className="image-carousel__thumbnails">
            {images.map((image, index) => (
              <button
                key={index}
                className={`image-carousel__thumbnail ${
                  index === currentIndex ? 'image-carousel__thumbnail--active' : ''
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              >
                <img src={getSrc(image)} alt={`Thumbnail ${index + 1}`} />
              </button>
            ))}
          </div>
        )}
      </div>

      {isExpanded && createPortal(
        <div
          className="image-carousel__modal"
          onClick={closeExpanded}
        >
          <button
            className="image-carousel__close-btn"
            onClick={closeExpanded}
            aria-label="Close fullscreen view"
          >
            ✕
          </button>
          <img
            src={currentSrc}
            alt={`${title} - Expanded`}
            className="image-carousel__modal-image"
            onClick={(e) => e.stopPropagation()}
          />
          {images.length > 1 && (
            <>
              <button
                className="image-carousel__modal-nav image-carousel__modal-nav--prev"
                onClick={(e) => {
                  e.stopPropagation()
                  goToPrevious()
                }}
                aria-label="Previous image"
              >
                ‹
              </button>
              <button
                className="image-carousel__modal-nav image-carousel__modal-nav--next"
                onClick={(e) => {
                  e.stopPropagation()
                  goToNext()
                }}
                aria-label="Next image"
              >
                ›
              </button>
            </>
          )}
          <div className="image-carousel__modal-info">
            {currentIndex + 1} / {images.length}
          </div>
        </div>,
        document.body
      )}
    </>
  )
}

