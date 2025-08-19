import { useLoaderData, Form, useNavigation } from "react-router";
import { useEffect, useState } from "react";
import { web3, AnchorProvider, Program, type Idl } from "@project-serum/anchor";

export async function loader() {
  return null;
}

export async function action() {
  console.log("something here");
  // return null;
  const idl = (await fetch("/idl.json").then((res) => res.json())) as Idl;

  const provider = AnchorProvider.local("https://api.devnet.solana.com");
  const program = new Program(
    idl,
    "JAVuBXeBZqXNtS73azhBDAoYaaAFfo4gWXoZe2e7Jf8H",
    provider,
  );

  // Create a new keypair for counter account (in production, use PDA or store key)
  const counter = web3.Keypair.generate();

  try {
    await program.methods
      .initialize()
      .accounts({
        counter: counter.publicKey,
        user: provider.wallet.publicKey,
        systemProgram: web3.SystemProgram.programId,
      })
      .signers([counter])
      .rpc();

    await program.methods
      .increment()
      .accounts({
        counter: counter.publicKey,
      })
      .rpc();

    return { success: true };
  } catch (err) {
    console.error(err);
    return { success: false, error: err.message };
  }
}

export default function Index() {
  const navigation = useNavigation();
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (navigation.state === "submitting") {
      setMessage("Processing...");
    }
  }, [navigation.state]);

  return (
    <div>
      <h1>Anchor Counter Example</h1>
      <Form method="post" action="/">
        <button type="submit" className="bg-blue-500 text-white">
          Initialize + Increment
        </button>
      </Form>
      {message && <p>{message}</p>}
    </div>
  );
}
