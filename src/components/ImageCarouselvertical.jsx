import { useState } from 'react'
import { createPortal } from 'react-dom'
import './ImageCarouselvertical.css'

export default function ImageCarouselVertical({ images, title }) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isOpen, setIsOpen] = useState(false)

    const next = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length)
    }

    const prev = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
    }

    const openModal = (e) => {
        e.stopPropagation()
        setIsOpen(true)
    }

    const closeModal = () => {
        setIsOpen(false)
    }

    return (
        <>
            <div className="image-carousel">
                <div className="image-carousel__container">
                    <div className="image-carousel__frame">
                        <img
                            src={images[currentIndex]}
                            alt={`${title} ${currentIndex + 1}`}
                            className="image-carousel__image"
                            onClick={openModal}
                        />

                        <button
                            className="image-carousel__nav-btn image-carousel__nav-btn--prev"
                            onClick={prev}
                            type="button"
                        >
                            ‹
                        </button>

                        <button
                            className="image-carousel__nav-btn image-carousel__nav-btn--next"
                            onClick={next}
                            type="button"
                        >
                            ›
                        </button>

                        <button
                            className="image-carousel__expand-btn"
                            onClick={openModal}
                            type="button"
                        >
                            ⤢
                        </button>
                    </div>
                </div>

                <div className="image-carousel__thumbnails">
                    {images.map((img, index) => (
                        <button
                            key={img}
                            className={`image-carousel__thumbnail ${
                                index === currentIndex ? 'image-carousel__thumbnail--active' : ''
                            }`}
                            onClick={() => setCurrentIndex(index)}
                            type="button"
                        >
                            <img src={img} alt={`${title} thumbnail ${index + 1}`} />
                        </button>
                    ))}
                </div>
            </div>

            {isOpen &&
                createPortal(
                    <div className="image-carousel__modal" onClick={closeModal}>
                        <img
                            src={images[currentIndex]}
                            alt={`${title} fullscreen ${currentIndex + 1}`}
                            className="image-carousel__modal-image"
                            onClick={(e) => e.stopPropagation()}
                        />

                        <button
                            className="image-carousel__close-btn"
                            onClick={closeModal}
                            type="button"
                        >
                            ✕
                        </button>

                        <button
                            className="image-carousel__modal-nav image-carousel__modal-nav--prev"
                            onClick={(e) => {
                                e.stopPropagation()
                                prev()
                            }}
                            type="button"
                        >
                            ‹
                        </button>

                        <button
                            className="image-carousel__modal-nav image-carousel__modal-nav--next"
                            onClick={(e) => {
                                e.stopPropagation()
                                next()
                            }}
                            type="button"
                        >
                            ›
                        </button>

                        <div className="image-carousel__modal-info">
                            {currentIndex + 1} / {images.length}
                        </div>
                    </div>,
                    document.body
                )}
        </>
    )
}