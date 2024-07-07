// "use client";

// import { useQuery } from "@tanstack/react-query";
// import { useRouter, useSearchParams } from "next/navigation";
// import { useEffect } from "react";
// export default function Kakao() {
//   const searchParams = useSearchParams();
//   const code = searchParams.get("code");
//   const { setAccessToken, setIsLogin, setUser } = useAuth();

//   const { data } = useQuery({
//     queryKey: ["KAKAO_CODE", code],
//     queryFn: async () => getKakaoCode(code),
//   });
//   const router = useRouter();

//   useEffect(() => {
//     const getKeyData = async (userId: number) => {
//       return await getKey(userId);
//     };
//     if (data) {
//       setAccessToken(data.accessToken);
//       setIsLogin(true);
//       setUser(data);
//       console.log(data);
//       if (data.userId)
//         getKeyData(data.userId)
//           .then((key: string) => {
//             setUser({ ...data, userObjectId: key });
//           })
//           .catch((error) => {
//             console.error("Error fetching key:", error);
//           });
//       data?.joinDate ? router.push("/home") : router.push("/setProfile");
//     }
//   }, [data]);
// }
