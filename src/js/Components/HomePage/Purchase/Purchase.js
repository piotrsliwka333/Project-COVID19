import React, {useEffect, useRef} from "react";
import lottie from "lottie-web";

export const Purchase = () => {

	const mask = useRef(null)
	const handSanitizer = useRef(null)

	useEffect(() => {
		lottie.loadAnimation({
			container: mask.current,
			renderer: 'svg',
			loop: true,
			autoplay: true,
			animationData: require('../../../JSON/mask.json')
		})
	}, [])

	useEffect(() => {
		lottie.loadAnimation({
			container: handSanitizer.current,
			renderer: 'svg',
			loop: true,
			autoplay: true,
			animationData: require('../../../JSON/handSanitizer.json')
		})
	}, [])


	const style = {
		color: "red"
	}

	// <div className={"hello"} ref={container}/>
	// <p  style={style} className="test"></p>
	return (
		<>
			<div className="purchase-box col-10 col-md-5 col-xl-5">
				<h5 className="purchase-box__title">Bundle 100 pieces of masks</h5>
				<div className="purchase-box__product" ref={mask}/>
				<p className="purchase-box__description">Price:
					<span className="discount"> 14.99$ </span>7.99$</p>
				<a target='_blank' href='https://allegro.pl/oferta/100-ochronnych-masek-cywilnych-4-warstwy-9161209385'
				   className="purchase-box__btn">Buy Now</a>
			</div>
			<div className="purchase-box col-10 col-md-5 col-xl-5">
				<h5 className="purchase-box__title">Bundle 10 pieces of hand sanitizer</h5>
				<div className="purchase-box__product" ref={handSanitizer}/>
				<p className="purchase-box__description">Price 29.99$</p>
				<a target='_blank' href={'https://allegro.pl/oferta/mydlo-antybakteryjne-w-plynie-10x1l-atest-9225069930'}
				   className="purchase-box__btn">Buy Now</a>
			</div>
		</>
	)

}