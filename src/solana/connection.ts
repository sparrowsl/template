import { Connection, PublicKey, clusterApiUrl } from "@solana/web3.js";

export const connection = new Connection(clusterApiUrl("devnet"), "confirmed");

// Replace this with your actual deployed program ID
export const PROGRAM_ID = new PublicKey(
  "JAVuBXeBZqXNtS73azhBDAoYaaAFfo4gWXoZe2e7Jf8H",
);
