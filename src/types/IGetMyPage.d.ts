type IUserInfo = {
	name: string;
	email: string;
	providerId: string;
	role: string;
};

type IUserVotes = {
	teamName: string;
	votes: IGetVote[];
	voteDate: string;
};
