import { createThirdwebClient } from "thirdweb";


const clientId = process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID || '4fc84ac6a5b7a8fa1dfadcc23e61b0d0';

console.log("Client ID:", clientId);

if (!clientId) {
    throw new Error("No client ID provided");
}

export const client = createThirdwebClient({
    clientId: clientId,
});
