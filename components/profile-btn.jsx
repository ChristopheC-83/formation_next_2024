"use client";

import Link from "next/link";
import { Button } from "./ui/button";


 export default function ProfileBtn() {



return (
        <Link href="/login">
            <Button>Login</Button>
        </Link>

  );

}