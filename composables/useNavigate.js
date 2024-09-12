import { useRouter } from "vue-router";

export const useNavigate = (article) => {
	const router = useRouter();
	return router.push({
		path: `/feed/${article.title.toLowerCase().replace(/\s+/g, "-")}`,
		query: {
			title: article?.title,
			urlToImage: article?.urlToImage,
			author: article?.author,
			publishedAt: article?.publishedAt,
			content: article?.description,
		},
	});
};
