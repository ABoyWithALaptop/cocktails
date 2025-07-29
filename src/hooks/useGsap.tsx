"use client";
import { Ref, useLayoutEffect, useRef } from "react";
import gsap from "gsap";

/**
 * Một custom hook để sử dụng GSAP trong React/Next.js components.
 * Đảm bảo GSAP chỉ chạy ở phía client và dọn dẹp animations.
 *
 * @param {Function} animationCallback - Một callback function chứa logic GSAP.
 * @param {Array} dependencies - Mảng dependencies để re-run animation khi thay đổi.
 * @returns {React.RefObject} - Một ref để gắn vào phần tử cần animation.
 */

export const useGsap = (
	animationCallBack: (ctx: Ref<null>) => undefined,
	dependencies = []
) => {
	const scope = useRef(null);
	useLayoutEffect(() => {
		// Khởi tạo context của GSAP để quản lý animations trong scope này
		// Điều này giúp tự động dọn dẹp animations khi component unmount
		const ctx = gsap.context(() => {
			animationCallBack(scope.current);
		}, scope);
		// Hàm cleanup sẽ tự động được gọi khi component unmount
		// để loại bỏ tất cả animations trong context này
		return () => ctx.revert();
	}, dependencies);
	return scope;
};
