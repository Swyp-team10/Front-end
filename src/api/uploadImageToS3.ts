import { apiRoutes } from '@/_lib/apiRoutes';
import api from '@/_lib/fetcher';

interface upLoadImageToS3Type{
	s3ImageUrl: string;
}

export const uploadImageToS3 = async (
	imageUrl: string,
): Promise<upLoadImageToS3Type> => {
	return await api.post({
		endpoint: apiRoutes.uploadImg,
		body: { base64File: imageUrl },
	});
};
