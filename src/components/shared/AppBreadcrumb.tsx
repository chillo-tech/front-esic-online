import React, {useEffect, useMemo} from 'react';
import { useRouter } from 'next/router';

function AppBreadcrumb() {
	const router = useRouter()
	// this is the same "generateBreadcrumbs" function, but placed
	// inside a "useMemo" call that is dependent on "router.asPath"
	const breadcrumbs = React.useMemo(function generateBreadcrumbs() {
		const asPathWithoutQuery = router.asPath.split("?")[0];
		const asPathNestedRoutes = asPathWithoutQuery.split("/")
			.filter(v => v.length > 0);

		const crumblist = asPathNestedRoutes.map((subpath, idx) => {
			const href = "/" + asPathNestedRoutes.slice(0, idx + 1).join("/");
			return { href, text: subpath };
		})

		return [{ href: "/", text: "Home" }, ...crumblist];
	}, [router.asPath]);
	[router.asPath])
	return (
		<div></div>
	);
}

export default AppBreadcrumb;
