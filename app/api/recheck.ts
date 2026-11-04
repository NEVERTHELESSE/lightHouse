// import type { LoaderFunctionArgs } from "@remix-run/node";

// export async function loader({ request }: LoaderFunctionArgs) {
//   const url = new URL(request.url);
//   const idParam = url.searchParams.get("id");

//   // Validate request
//   if (!idParam || !/^[1-9]\d*$/.test(idParam)) {
//     return Response.json(
//       {
//         data: null,
//         error: "A valid user ID is required.",
//       },
//       { status: 400 }
//     );
//   }

//   const id = Number(idParam);

//   if (!Number.isSafeInteger(id)) {
//     return Response.json(
//       {
//         data: null,
//         error: "Invalid user ID.",
//       },
//       { status: 400 }
//     );
//   }

//   // Fetch user
//   const { data: user, error } = await supabase
//     .from("users")
//     .select("search")
//     .eq("id", id)
//     .maybeSingle();

//   // Handle database errors
//   if (error) {
//     console.error("Failed to fetch user:", {
//       userId: id,
//       error,
//     });

//     return Response.json(
//       {
//         data: null,
//         error: "Unable to retrieve user data.",
//       },
//       { status: 500 }
//     );
//   }

//   // Handle missing user
//   if (!user) {
//     return Response.json(
//       {
//         data: null,
//         error: "User not found.",
//       },
//       { status: 404 }
//     );
//   }

//   // Success
//   return Response.json({
//     data: user,
//     error: null,
//   });
// }
