/* eslint-disable @next/next/no-css-tags */
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import Script from 'next/script'
import Header from './Header'
import Footer from './Footer'
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { signOut } from 'next-auth/react'
import axios from 'axios'
import db from '@/util/db'
import Product from '@/models/Product'
const inter = Inter({ subsets: ['latin'] })

export default function Home({products}) {
  const sess=useSession()
console.log(products);
 
  return (
  <>


 <link rel="shortcut icon" href="img/favicon.png" type="image/x-icon" />

  <link rel="stylesheet" href="css/font-icons.css" />

  <link rel="stylesheet" href="css/plugins.css" />

  <link rel="stylesheet" href="css/style.css" />

  <link rel="stylesheet" href="css/responsive.css" />


  <div className="body-wrapper">

<Header/>
{/* <button onClick={signOut()}></button> */}

  <div className="ltn__utilize-overlay" />
  {/* SLIDER AREA START (slider-3) */}
  {/* SLIDER AREA END */}
  {/* CATEGORY AREA START */}
  <div className="ltn__category-area section-bg-1-- pt-50 pb-90">
    <div className="container">

    </div>
  </div>

  <div className="ltn__about-us-area pt-25 pb-120 ">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 align-self-center">
          <div className="about-us-img-wrap about-img-left">
            <img src="img/others/9.png" alt="About Us Image" />
          </div>
        </div>
        <div className="col-lg-6 align-self-center">
          <div className="about-us-info-wrap">
            <div className="section-title-area ltn__section-title-2--- mb-30">
              <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color d-none">
                About Us
              </h6>
              <h1 className="section-title">
                Your faithful partners Medical Goods
              </h1>
              <p>
                Houzez allow you to design unlimited panels and real estate
                custom forms to capture leads and keep record of all information
              </p>
            </div>
            <ul className="ltn__list-item-1 ltn__list-item-1-before--- clearfix">
              <li>
                <i className="fas fa-check-square" /> Better security for
                patient privacy and information.
              </li>
              <li>
                <i className="fas fa-check-square" /> More products at lower
                prices.
              </li>
              <li>
                <i className="fas fa-check-square" /> connect customers with the
                power of eCommerce at all.
              </li>
            </ul>
            <div className="about-author-info-2 border-top mt-30 pt-20">
              <ul>
                <li>
                  <div className="about-author-info-2-brief  d-flex">
                    <div className="author-img">
                      <img src="img/blog/author.jpg" alt="#" />
                    </div>
                    <div className="author-name-designation">
                      <h4 className="mb-0">Jerry Henson</h4>
                      <small>Medical Specialist</small>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="about-author-info-2-contact  d-flex">
                    <div className="about-contact-icon d-flex align-self-center mr-10">
                      <i className="icon-call" />
                    </div>
                    <div className="about-author-info-2-contact-info">
                      <small>Get Support</small>
                      <h6 className="mb-0">123-456-789-10</h6>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* ABOUT US AREA END */}
  {/* BANNER AREA START */}
  <div className="ltn__banner-area mt-120---">
    <div className="container">
      <div className="row ltn__custom-gutter--- justify-content-center">
        <div className="col-lg-4 col-sm-6">
          <div className="ltn__banner-item">
            <div className="ltn__banner-img">
              <Link href="#">
                <img src="img/banner/1.jpg" alt="Banner Image" />
              </Link>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6">
          <div className="ltn__banner-item">
            <div className="ltn__banner-img">
              <Link href="#">
                <img src="img/banner/2.jpg" alt="Banner Image" />
              </Link>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6">
          <div className="ltn__banner-item">
            <div className="ltn__banner-img">
              <Link href="#">
                <img src="img/banner/3.jpg" alt="Banner Image" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* BANNER AREA END */}
  {/* PRODUCT AREA START (product-item-3) */}
  <div className="ltn__product-area ltn__product-gutter  no-product-ratting  pb-70">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
        <h1 className="section-title text-center">Featured Products</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-3">
          <div className="row">
            <div className="col-lg-12 col-sm-6">
              <div className="ltn__banner-item">
                <div className="ltn__banner-img">
                  <Link href="#">
                    <img src="img/banner/11.jpg" alt="Banner Image" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-12 col-sm-6">
              <div className="ltn__banner-item">
                <div className="ltn__banner-img">
                  <Link href="#">
                    <img src="img/banner/12.jpg" alt="Banner Image" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-9">
          <div className="row ltn__tab-product-slider-one-active--- slick-arrow-1">
  
            {/* ltn__product-item */}

            
            
            
            ????????  {products.map((product,i) => (
            // eslint-disable-next-line react/jsx-key
            <div className="col-lg-3--- col-md-4 col-sm-6 col-6">
              <div className="ltn__product-item ltn__product-item-2 text-left" key={i}>
                <div className="product-img">
                {/* <Link href='productdetails'> */}
                  <Link        href={`/product/${product._id}`}>
                    <img src={`images/${product.image}`} alt="" />
                  </Link>
                  <div className="product-badge">
                    <ul>
                      <li className="sale-badge">New</li>
                    </ul>
                  </div>
                  <div className="product-hover-action">
                    <ul>
                      <li>
                        <Link
                   href='#'
                          title="Quick View"
                          data-bs-toggle="modal"
                          data-bs-target="#quick_view_modal"
                        >
                          <i className="far fa-eye" />
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          title="Add to Cart"
                          data-bs-toggle="modal"
                          data-bs-target="#add_to_cart_modal"
                        >
                          <i className="fas fa-shopping-cart" />
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          title="Wishlist"
                          data-bs-toggle="modal"
                          data-bs-target="#liton_wishlist_modal"
                        >
                          <i className="far fa-heart" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="product-info">
                  <div className="product-ratting">
                    <ul>
                      <li>
                        <Link href="#">
                          <i className="fas fa-star" />
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fas fa-star" />
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fas fa-star" />
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fas fa-star-half-alt" />
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="far fa-star" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <h2 className="product-title">
                    <Link href="productdetails">{product.name}</Link>
                  </h2>
                  <div className="product-price">
                    <span style={{fontSize:20,color:'red'}}><span>&#8377;</span>{product.price}</span>
                    {/* <del>$180.00</del> */}
                  </div>
                </div>
              </div>
            </div>


????????????))}

            {/*  */}
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* PRODUCT AREA END */}
  {/* COUNTDOWN AREA START */}

  {/* COUNTDOWN AREA END */}
  {/* PRODUCT AREA START (product-item-3) */}
  <div className="ltn__product-area ltn__product-gutter pt-115 pb-70">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="section-title-area ltn__section-title-2 text-center">
            <h1 className="">New Product</h1>
          </div>
        </div>
      </div>
      <div className="row ltn__tab-product-slider-one-active--- slick-arrow-1">
        {/* ltn__product-item */}
        <div className="col-lg-3 col-md-4 col-sm-6 col-6">
          <div className="ltn__product-item ltn__product-item-3 text-left">
            <div className="product-img">
              <Link href="product-details.html">
                <img src="img/product-2/1.png" alt="#" />
              </Link>
              <div className="product-badge">
                <ul>
                  <li className="sale-badge">New</li>
                </ul>
              </div>
              <div className="product-hover-action">
                <ul>
                  <li>
                    <Link
                      href="#"
                      title="Quick View"
                      data-bs-toggle="modal"
                      data-bs-target="#quick_view_modal"
                    >
                      <i className="far fa-eye" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      title="Add to Cart"
                      data-bs-toggle="modal"
                      data-bs-target="#add_to_cart_modal"
                    >
                      <i className="fas fa-shopping-cart" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      title="Wishlist"
                      data-bs-toggle="modal"
                      data-bs-target="#liton_wishlist_modal"
                    >
                      <i className="far fa-heart" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="product-info">
              <div className="product-ratting">
                <ul>
                  <li>
                    <Link href="#">
                      <i className="fas fa-star" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="fas fa-star" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="fas fa-star" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="fas fa-star-half-alt" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="far fa-star" />
                    </Link>
                  </li>
                </ul>
              </div>
              <h2 className="product-title">
                <Link href="product-details.html">Antiseptic Spray</Link>
              </h2>
              <div className="product-price">
                <span>$32.00</span>
                <del>$46.00</del>
              </div>
            </div>
          </div>
        </div>
        {/* ltn__product-item */}

        <div className="col-lg-3 col-md-4 col-sm-6 col-6">
          <div className="ltn__product-item ltn__product-item-3 text-left">
            <div className="product-img">
              <Link href="product-details.html">
                <img src="img/product-2/8.png" alt="#" />
              </Link>
              <div className="product-badge">
                <ul>
                  <li className="sale-badge">New</li>
                </ul>
              </div>
              <div className="product-hover-action">
                <ul>
                  <li>
                    <Link
                      href="#"
                      title="Quick View"
                      data-bs-toggle="modal"
                      data-bs-target="#quick_view_modal"
                    >
                      <i className="far fa-eye" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      title="Add to Cart"
                      data-bs-toggle="modal"
                      data-bs-target="#add_to_cart_modal"
                    >
                      <i className="fas fa-shopping-cart" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      title="Wishlist"
                      data-bs-toggle="modal"
                      data-bs-target="#liton_wishlist_modal"
                    >
                      <i className="far fa-heart" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="product-info">
              <div className="product-ratting">
                <ul>
                  <li>
                    <Link href="#">
                      <i className="fas fa-star" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="fas fa-star" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="fas fa-star" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="fas fa-star-half-alt" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="far fa-star" />
                    </Link>
                  </li>
                </ul>
              </div>
              <h2 className="product-title">
                <Link href="product-details.html">Cosmetic Containers</Link>
              </h2>
              <div className="product-price">
                <span>$78.00</span>
                <del>$85.00</del>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
      </div>
    </div>
  </div>
  {/* PRODUCT AREA END */}
  {/* ABOUT US AREA START */}
  <div className="ltn__about-us-area section-bg-1 bg-image-left-before pt-115 pb-115">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 align-self-center">
          <div className="about-us-img-wrap about-img-left---"></div>
        </div>
        <div className="col-lg-6 align-self-center">
          <div className="about-us-info-wrap">
            <div className="section-title-area ltn__section-title-2--- mb-20">
              <h6 className="section-subtitle section-subtitle-2--- ltn__secondary-color">
                N95 Facial Covering Mask
              </h6>
              <h1 className="section-title">
                Grade A Safety Masks For Sale. Haurry Up!
              </h1>
              <p>
                Over 39,000 people work for us in more than 70 countries all
                over the This breadth of global coverage, combined with
                specialist services
              </p>
            </div>
            <ul className="ltn__list-item-half clearfix">
              <li>
                <i className="flaticon-home-2" />
                Activated Carbon
              </li>
              <li>
                <i className="flaticon-mountain" />
                Breathing Valve
              </li>
              <li>
                <i className="flaticon-heart" />6 Layer Filteration
              </li>
              <li>
                <i className="flaticon-secure" />
                Rewashes &amp; Reusable
              </li>
            </ul>
            <div className="btn-wrapper animated">
              <Link
                href="service.html"
                className="ltn__secondary-color text-uppercase text-decoration-underline"
              >
                View Products
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* ABOUT US AREA END */}
  {/* ABOUT US AREA START */}
  <div
    className="ltn__about-us-area bg-overlay-white-90--- bg-image pt-115 pb-110 d-none"
    data-bs-bg="img/bg/26.jpg"
  >
    <div className="container">
      <div className="row">
        <div className="col-lg-6 align-self-center">
          <div className="about-us-img-wrap about-img-left">
            {/* <img src="img/others/7.png" alt="About Us Image"> */}
          </div>
        </div>
        <div className="col-lg-6 align-self-center">
          <div className="about-us-info-wrap">
            <div className="section-title-area ltn__section-title-2--- mb-20">
              <h6 className="section-subtitle section-subtitle-2--- ltn__secondary-color">
                N95 Facial Covering Mask
              </h6>
              <h1 className="section-title">
                Grade A Safety Masks For Sale. Haurry Up!
              </h1>
              <p>
                Over 39,000 people work for us in more than 70 countries all
                over the This breadth of global coverage, combined with
                specialist services
              </p>
            </div>
            <ul className="ltn__list-item-half clearfix">
              <li>
                <i className="flaticon-home-2" />
                Activated Carbon
              </li>
              <li>
                <i className="flaticon-mountain" />
                Breathing Valve
              </li>
              <li>
                <i className="flaticon-heart" />6 Layer Filteration
              </li>
              <li>
                <i className="flaticon-secure" />
                Rewashes &amp; Reusable
              </li>
            </ul>
            <div className="btn-wrapper animated">
              <Link
                href="service.html"
                className="ltn__secondary-color text-uppercase text-decoration-underline"
              >
                View Products
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* ABOUT US AREA END */}
  {/* PRODUCT AREA START (product-item-3) */}
  <div className="ltn__product-area ltn__product-gutter  no-product-ratting pt-115 pb-70---">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="section-title-area ltn__section-title-2 text-center">
            <h1 className="">Trending Products</h1>
          </div>
        </div>
      </div>
    
    </div>
  </div>
  {/* PRODUCT AREA END */}
  {/* BANNER AREA START */}
  <div className="ltn__banner-area mt-120---">
    <div className="container">
      <div className="row ltn__custom-gutter--- justify-content-center">
        <div className="col-lg-4 col-sm-6">
          <div className="ltn__banner-item">
            <div className="ltn__banner-img">
              <Link href="#">
                <img src="img/banner/23.jpg" alt="Banner Image" />
              </Link>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6">
          <div className="ltn__banner-item">
            <div className="ltn__banner-img">
              <Link href="#">
                <img src="img/banner/22.jpg" alt="Banner Image" />
              </Link>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6">
          <div className="ltn__banner-item">
            <div className="ltn__banner-img">
              <Link href="#">
                <img src="img/banner/21.jpg" alt="Banner Image" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* BANNER AREA END */}
  {/* FEATURE AREA START ( Feature - 3) */}
  <div className="ltn__feature-area section-bg-1 mt-90 pt-30 pb-30 mt--65---">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="ltn__feature-item-box-wrap ltn__feature-item-box-wrap-2 ltn__border--- section-bg-1">
            <div className="ltn__feature-item ltn__feature-item-8">
              <div className="ltn__feature-icon">
                <img src="img/icons/svg/8-trolley.svg" alt="#" />
              </div>
              <div className="ltn__feature-info">
                <h4>Free shipping</h4>
                <p>On all orders over $49.00</p>
              </div>
            </div>
            <div className="ltn__feature-item ltn__feature-item-8">
              <div className="ltn__feature-icon">
                <img src="img/icons/svg/9-money.svg" alt="#" />
              </div>
              <div className="ltn__feature-info">
                <h4>15 days returns</h4>
                <p>Moneyback guarantee</p>
              </div>
            </div>
            <div className="ltn__feature-item ltn__feature-item-8">
              <div className="ltn__feature-icon">
                <img src="img/icons/svg/10-credit-card.svg" alt="#" />
              </div>
              <div className="ltn__feature-info">
                <h4>Secure checkout</h4>
                <p>Protected by Paypal</p>
              </div>
            </div>
            <div className="ltn__feature-item ltn__feature-item-8">
              <div className="ltn__feature-icon">
                <img src="img/icons/svg/11-gift-card.svg" alt="#" />
              </div>
              <div className="ltn__feature-info">
                <h4>Offer &amp; gift here</h4>
                <p>On all orders over</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>



  {/* PRODUCT AREA END */}
  {/* PRODUCT AREA START (product-item-3) */}
  <div className="ltn__product-area ltn__product-gutter pt-85 pb-70 d-none">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
        <div className="section-title-area ltn__section-title-2 text-center">
            <h1 className="">New Product</h1>
          </div>
        </div>
      </div>
      <div className="row ltn__tab-product-slider-one-active--- slick-arrow-1">
        {/* ltn__product-item */}
        <div className="col-lg-3 col-md-4 col-sm-6 col-6">
          <div className="ltn__product-item ltn__product-item-3 text-center">
            <div className="product-img">
              <Link href="product-details.html">
                <img src="img/product/1.png" alt="#" />
              </Link>
              <div className="product-badge">
                <ul>
                  <li className="sale-badge">New</li>
                </ul>
              </div>
              <div className="product-hover-action">
                <ul>
                  <li>
                    <Link
                      href="#"
                      title="Quick View"
                      data-bs-toggle="modal"
                      data-bs-target="#quick_view_modal"
                    >
                      <i className="far fa-eye" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      title="Add to Cart"
                      data-bs-toggle="modal"
                      data-bs-target="#add_to_cart_modal"
                    >
                      <i className="fas fa-shopping-cart" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      title="Wishlist"
                      data-bs-toggle="modal"
                      data-bs-target="#liton_wishlist_modal"
                    >
                      <i className="far fa-heart" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="product-info">
              <div className="product-ratting">
                <ul>
                  <li>
                    <Link href="#">
                      <i className="fas fa-star" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="fas fa-star" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="fas fa-star" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="fas fa-star-half-alt" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="far fa-star" />
                    </Link>
                  </li>
                </ul>
              </div>
              <h2 className="product-title">
                <Link href="product-details.html">Antiseptic Spray</Link>
              </h2>
              <div className="product-price">
                <span>$32.00</span>
                <del>$46.00</del>
              </div>
            </div>
          </div>
        </div>
        {/* ltn__product-item */}
        <div className="col-lg-3 col-md-4 col-sm-6 col-6">
          <div className="ltn__product-item ltn__product-item-3 text-center">
            <div className="product-img">
              <Link href="product-details.html">
                <img src="img/product/2.png" alt="#" />
              </Link>
              <div className="product-hover-action">
                <ul>
                  <li>
                    <Link
                      href="#"
                      title="Quick View"
                      data-bs-toggle="modal"
                      data-bs-target="#quick_view_modal"
                    >
                      <i className="far fa-eye" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      title="Add to Cart"
                      data-bs-toggle="modal"
                      data-bs-target="#add_to_cart_modal"
                    >
                      <i className="fas fa-shopping-cart" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      title="Wishlist"
                      data-bs-toggle="modal"
                      data-bs-target="#liton_wishlist_modal"
                    >
                      <i className="far fa-heart" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="product-info">
              <div className="product-ratting">
                <ul>
                  <li>
                    <Link href="#">
                      <i className="fas fa-star" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="fas fa-star" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="fas fa-star" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="fas fa-star-half-alt" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="far fa-star" />
                    </Link>
                  </li>
                </ul>
              </div>
              <h2 className="product-title">
                <Link href="product-details.html">Digital Stethoscope</Link>
              </h2>
              <div className="product-price">
                <span>$25.00</span>
                <del>$35.00</del>
              </div>
            </div>
          </div>
        </div>
        {/* ltn__product-item */}
        <div className="col-lg-3 col-md-4 col-sm-6 col-6">
          <div className="ltn__product-item ltn__product-item-3 text-center">
            <div className="product-img">
              <Link href="product-details.html">
                <img src="img/product/3.png" alt="#" />
              </Link>
              <div className="product-badge">
                <ul>
                  <li className="sale-badge">New</li>
                </ul>
              </div>
              <div className="product-hover-action">
                <ul>
                  <li>
                    <Link
                      href="#"
                      title="Quick View"
                      data-bs-toggle="modal"
                      data-bs-target="#quick_view_modal"
                    >
                      <i className="far fa-eye" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      title="Add to Cart"
                      data-bs-toggle="modal"
                      data-bs-target="#add_to_cart_modal"
                    >
                      <i className="fas fa-shopping-cart" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      title="Wishlist"
                      data-bs-toggle="modal"
                      data-bs-target="#liton_wishlist_modal"
                    >
                      <i className="far fa-heart" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="product-info">
              <div className="product-ratting">
                <ul>
                  <li>
                    <Link href="#">
                      <i className="fas fa-star" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="fas fa-star" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="fas fa-star" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="fas fa-star-half-alt" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="far fa-star" />
                    </Link>
                  </li>
                </ul>
              </div>
              <h2 className="product-title">
                <Link href="product-details.html">Cosmetic Containers</Link>
              </h2>
              <div className="product-price">
                <span>$75.00</span>
                <del>$92.00</del>
              </div>
            </div>
          </div>
        </div>
        {/* ltn__product-item */}
        <div className="col-lg-3 col-md-4 col-sm-6 col-6">
          <div className="ltn__product-item ltn__product-item-3 text-center">
            <div className="product-img">
              <Link href="product-details.html">
                <img src="img/product/4.png" alt="#" />
              </Link>
              <div className="product-badge">
                <ul>
                  <li className="sale-badge">New</li>
                </ul>
              </div>
              <div className="product-hover-action">
                <ul>
                  <li>
                    <Link
                      href="#"
                      title="Quick View"
                      data-bs-toggle="modal"
                      data-bs-target="#quick_view_modal"
                    >
                      <i className="far fa-eye" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      title="Add to Cart"
                      data-bs-toggle="modal"
                      data-bs-target="#add_to_cart_modal"
                    >
                      <i className="fas fa-shopping-cart" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      title="Wishlist"
                      data-bs-toggle="modal"
                      data-bs-target="#liton_wishlist_modal"
                    >
                      <i className="far fa-heart" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="product-info">
              <div className="product-ratting">
                <ul>
                  <li>
                    <Link href="#">
                      <i className="fas fa-star" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="fas fa-star" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="fas fa-star" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="fas fa-star-half-alt" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="far fa-star" />
                    </Link>
                  </li>
                </ul>
              </div>
              <h2 className="product-title">
                <Link href="product-details.html">Cosmetic Containers</Link>
              </h2>
              <div className="product-price">
                <span>$78.00</span>
                <del>$85.00</del>
              </div>
            </div>
          </div>
        </div>
        {/* ltn__product-item */}
        <div className="col-lg-3 col-md-4 col-sm-6 col-6">
          <div className="ltn__product-item ltn__product-item-3 text-center">
            <div className="product-img">
              <Link href="product-details.html">
                <img src="img/product/5.png" alt="#" />
              </Link>
              <div className="product-badge">
                <ul>
                  <li className="sale-badge">New</li>
                </ul>
              </div>
              <div className="product-hover-action">
                <ul>
                  <li>
                    <Link
                      href="#"
                      title="Quick View"
                      data-bs-toggle="modal"
                      data-bs-target="#quick_view_modal"
                    >
                      <i className="far fa-eye" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      title="Add to Cart"
                      data-bs-toggle="modal"
                      data-bs-target="#add_to_cart_modal"
                    >
                      <i className="fas fa-shopping-cart" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      title="Wishlist"
                      data-bs-toggle="modal"
                      data-bs-target="#liton_wishlist_modal"
                    >
                      <i className="far fa-heart" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="product-info">
              <div className="product-ratting">
                <ul>
                  <li>
                    <Link href="#">
                      <i className="fas fa-star" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="fas fa-star" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="fas fa-star" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="fas fa-star-half-alt" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="far fa-star" />
                    </Link>
                  </li>
                </ul>
              </div>
              <h2 className="product-title">
                <Link href="product-details.html">Blue Hand Gloves</Link>
              </h2>
              <div className="product-price">
                <span>$150.00</span>
                <del>$180.00</del>
              </div>
            </div>
          </div>
        </div>
        {/* ltn__product-item */}
        <div className="col-lg-3 col-md-4 col-sm-6 col-6">
          <div className="ltn__product-item ltn__product-item-3 text-center">
            <div className="product-img">
              <Link href="product-details.html">
                <img src="img/product/6.png" alt="#" />
              </Link>
              <div className="product-badge">
                <ul>
                  <li className="sale-badge">New</li>
                </ul>
              </div>
              <div className="product-hover-action">
                <ul>
                  <li>
                    <Link
                      href="#"
                      title="Quick View"
                      data-bs-toggle="modal"
                      data-bs-target="#quick_view_modal"
                    >
                      <i className="far fa-eye" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      title="Add to Cart"
                      data-bs-toggle="modal"
                      data-bs-target="#add_to_cart_modal"
                    >
                      <i className="fas fa-shopping-cart" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      title="Wishlist"
                      data-bs-toggle="modal"
                      data-bs-target="#liton_wishlist_modal"
                    >
                      <i className="far fa-heart" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="product-info">
              <div className="product-ratting">
                <ul>
                  <li>
                    <Link href="#">
                      <i className="fas fa-star" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="fas fa-star" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="fas fa-star" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="fas fa-star-half-alt" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="far fa-star" />
                    </Link>
                  </li>
                </ul>
              </div>
              <h2 className="product-title">
                <Link href="product-details.html">Thermometer Gun</Link>
              </h2>
              <div className="product-price">
                <span>$150.00</span>
                <del>$180.00</del>
              </div>
            </div>
          </div>
        </div>
        {/* ltn__product-item */}
        <div className="col-lg-3 col-md-4 col-sm-6 col-6">
          <div className="ltn__product-item ltn__product-item-3 text-center">
            <div className="product-img">
              <Link href="product-details.html">
                <img src="img/product/7.png" alt="#" />
              </Link>
              <div className="product-badge">
                <ul>
                  <li className="sale-badge">New</li>
                </ul>
              </div>
              <div className="product-hover-action">
                <ul>
                  <li>
                    <Link
                      href="#"
                      title="Quick View"
                      data-bs-toggle="modal"
                      data-bs-target="#quick_view_modal"
                    >
                      <i className="far fa-eye" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      title="Add to Cart"
                      data-bs-toggle="modal"
                      data-bs-target="#add_to_cart_modal"
                    >
                      <i className="fas fa-shopping-cart" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      title="Wishlist"
                      data-bs-toggle="modal"
                      data-bs-target="#liton_wishlist_modal"
                    >
                      <i className="far fa-heart" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="product-info">
              <div className="product-ratting">
                <ul>
                  <li>
                    <Link href="#">
                      <i className="fas fa-star" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="fas fa-star" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="fas fa-star" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="fas fa-star-half-alt" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="far fa-star" />
                    </Link>
                  </li>
                </ul>
              </div>
              <h2 className="product-title">
                <Link href="product-details.html">Cosmetic Containers</Link>
              </h2>
              <div className="product-price">
                <span>$75.00</span>
                <del>$92.00</del>
              </div>
            </div>
          </div>
        </div>
        {/* ltn__product-item */}
        <div className="col-lg-3 col-md-4 col-sm-6 col-6">
          <div className="ltn__product-item ltn__product-item-3 text-center">
            <div className="product-img">
              <Link href="product-details.html">
                <img src="img/product/8.png" alt="#" />
              </Link>
              <div className="product-badge">
                <ul>
                  <li className="sale-badge">New</li>
                </ul>
              </div>
              <div className="product-hover-action">
                <ul>
                  <li>
                    <Link
                      href="#"
                      title="Quick View"
                      data-bs-toggle="modal"
                      data-bs-target="#quick_view_modal"
                    >
                      <i className="far fa-eye" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      title="Add to Cart"
                      data-bs-toggle="modal"
                      data-bs-target="#add_to_cart_modal"
                    >
                      <i className="fas fa-shopping-cart" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      title="Wishlist"
                      data-bs-toggle="modal"
                      data-bs-target="#liton_wishlist_modal"
                    >
                      <i className="far fa-heart" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="product-info">
              <div className="product-ratting">
                <ul>
                  <li>
                    <Link href="#">
                      <i className="fas fa-star" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="fas fa-star" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="fas fa-star" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="fas fa-star-half-alt" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="far fa-star" />
                    </Link>
                  </li>
                </ul>
              </div>
              <h2 className="product-title">
                <Link href="product-details.html">Cosmetic Containers</Link>
              </h2>
              <div className="product-price">
                <span>$78.00</span>
                <del>$85.00</del>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
      </div>
    </div>
  </div>
  {/* PRODUCT AREA END */}
  {/* CALL TO ACTION START (call-to-action-6) */}
  <div
    className="ltn__call-to-action-area call-to-action-6 before-bg-bottom d-none"
    data-bs-bg="img/1.jpg--"
  >
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="call-to-action-inner call-to-action-inner-6 ltn__secondary-bg position-relative text-center---">
            <div className="coll-to-info text-color-white">
              <h1>
                Buy medical disposable face mask <br /> to protect your loved
                ones
              </h1>
            </div>
            <div className="btn-wrapper">
              <Link className="btn btn-effect-3 btn-white" href="#">
                Explore Products <i className="icon-next" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

<Footer/>

  <div className="ltn__modal-area ltn__quick-view-modal-area">
    <div className="modal fade" id="quick_view_modal" tabIndex={-1}>
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="close"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">??</span>
              {/* <i class="fas fa-times"></i> */}
            </button>
          </div>
          <div className="modal-body">
            <div className="ltn__quick-view-modal-inner">
              <div className="modal-product-item">
                <div className="row">
                  <div className="col-lg-6 col-12">
                    <div className="modal-product-img">
                      <img src="img/product/4.png" alt="#" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-12">
                    <div className="modal-product-info">
                      <div className="product-ratting">
                        <ul>
                          <li>
                            <Link href="#">
                              <i className="fas fa-star" />
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <i className="fas fa-star" />
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <i className="fas fa-star" />
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <i className="fas fa-star-half-alt" />
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <i className="far fa-star" />
                            </Link>
                          </li>
                          <li className="review-total">
                            {" "}
                            <Link href="#"> ( 95 Reviews )</Link>
                          </li>
                        </ul>
                      </div>
                      <h3>
                        <Link href="product-details.html">Digital Stethoscope</Link>
                      </h3>
                      <div className="product-price">
                        <span>$15.00</span>
                        <del>$25.00</del>
                      </div>
                      <hr />
                      <div className="modal-product-brief">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Dignissimos repellendus repudiandae incidunt
                          quidem pariatur expedita, quo quis modi tempore non.
                        </p>
                      </div>
                      <div className="modal-product-meta ltn__product-details-menu-1 d-none">
                        <ul>
                          <li>
                            <strong>Categories:</strong>
                            <span>
                              <Link href="#">Parts</Link>
                              <Link href="#">Car</Link>
                              <Link href="#">Seat</Link>
                              <Link href="#">Cover</Link>
                            </span>
                          </li>
                        </ul>
                      </div>
                      <div className="ltn__product-details-menu-2 d-none">
                        <ul>
                          <li>
                            <div className="cart-plus-minus">
                              <input
                                type="text"
                                defaultValue="02"
                                name="qtybutton"
                                className="cart-plus-minus-box"
                              />
                            </div>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="theme-btn-1 btn btn-effect-1"
                              title="Add to Cart"
                              data-bs-toggle="modal"
                              data-bs-target="#add_to_cart_modal"
                            >
                              <i className="fas fa-shopping-cart" />
                              <span>ADD TO CART</span>
                            </Link>
                          </li>
                        </ul>
                      </div>
                      {/* <hr> */}
                      <div className="ltn__product-details-menu-3">
                        <ul>
                          <li>
                            <Link
                              href="#"
                              className=""
                              title="Wishlist"
                              data-bs-toggle="modal"
                              data-bs-target="#liton_wishlist_modal"
                            >
                              <i className="far fa-heart" />
                              <span>Add to Wishlist</span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className=""
                              title="Compare"
                              data-bs-toggle="modal"
                              data-bs-target="#quick_view_modal"
                            >
                              <i className="fas fa-exchange-alt" />
                              <span>Compare</span>
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <hr />
                      <div className="ltn__social-media">
                        <ul>
                          <li>Share:</li>
                          <li>
                            <Link href="#" title="Facebook">
                              <i className="fab fa-facebook-f" />
                            </Link>
                          </li>
                          <li>
                            <Link href="#" title="Twitter">
                              <i className="fab fa-twitter" />
                            </Link>
                          </li>
                          <li>
                            <Link href="#" title="Linkedin">
                              <i className="fab fa-linkedin" />
                            </Link>
                          </li>
                          <li>
                            <Link href="#" title="Instagram">
                              <i className="fab fa-instagram" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <label className="float-end mb-0">
                        <Link
                          className="text-decoration"
                          href="product-details.html"
                        >
                          <small>View Details</small>
                        </Link>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* MODAL AREA END */}
  {/* MODAL AREA START (Add To Cart Modal) */}
  <div className="ltn__modal-area ltn__add-to-cart-modal-area">
    <div className="modal fade" id="add_to_cart_modal" tabIndex={-1}>
      <div className="modal-dialog modal-md" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="close"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">??</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="ltn__quick-view-modal-inner">
              <div className="modal-product-item">
                <div className="row">
                  <div className="col-12">
                    <div className="modal-product-img">
                      <img src="img/product/1.png" alt="#" />
                    </div>
                    <div className="modal-product-info">
                      <h5>
                        <Link href="product-details.html">Digital Stethoscope</Link>
                      </h5>
                      <p className="added-cart">
                        <i className="fa fa-check-circle" /> Successfully added
                        to your Cart
                      </p>
                      <div className="btn-wrapper">
                        <Link
                          href="cart.html"
                          className="theme-btn-1 btn btn-effect-1"
                        >
                          View Cart
                        </Link>
                        <Link
                          href="checkout.html"
                          className="theme-btn-2 btn btn-effect-2"
                        >
                          Checkout
                        </Link>
                      </div>
                    </div>
                    {/* additional-info */}
                    <div className="additional-info d-none">
                      <p>
                        We want to give you <b>10% discount</b> for your first
                        order, <br /> Use discount code at checkout
                      </p>
                      <div className="payment-method">
                        <img src="img/icons/payment.png" alt="#" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* MODAL AREA END */}
  {/* MODAL AREA START (Wishlist Modal) */}
  <div className="ltn__modal-area ltn__add-to-cart-modal-area">
    <div className="modal fade" id="liton_wishlist_modal" tabIndex={-1}>
      <div className="modal-dialog modal-md" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="close"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">??</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="ltn__quick-view-modal-inner">
              <div className="modal-product-item">
                <div className="row">
                  <div className="col-12">
                    <div className="modal-product-img">
                      <img src="img/product/7.png" alt="#" />
                    </div>
                    <div className="modal-product-info">
                      <h5>
                        <Link href="product-details.html">Digital Stethoscope</Link>
                      </h5>
                      <p className="added-cart">
                        <i className="fa fa-check-circle" /> Successfully added
                        to your Wishlist
                      </p>
                      <div className="btn-wrapper">
                        <Link
                          href="wishlist.html"
                          className="theme-btn-1 btn btn-effect-1"
                        >
                          View Wishlist
                        </Link>
                      </div>
                    </div>
                    {/* additional-info */}
                    <div className="additional-info d-none">
                      <p>
                        We want to give you <b>10% discount</b> for your first
                        order, <br /> Use discount code at checkout
                      </p>
                      <div className="payment-method">
                        <img src="img/icons/payment.png" alt="#" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* MODAL AREA END */}
</div>
{/* <Script src="https://example.com/script.js" /> */}
<Script src="js/plugins.js"></Script>
  </>
  )
}

export async function getServerSideProps() {
  await db.connect();
  const products = await Product.find().lean();
  console.log(products);
  return {
    props: {
      products: products.map(db.convertDocToObj),
????????},
????};
}
