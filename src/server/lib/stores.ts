/* this file exports themeAtom, a constant that
manages the state of the theme (light/dark mode). it can either
be "light", "dark", or "inherit" (inherit doesn't work though).
this is done using global state management from jotai.
check https://jotai.org/docs/introduction for more information. */

import { atom } from "jotai";
import { DatabaseUser, User } from "lucia";
import { DatabaseUserAttributes } from "./auth";
import { Device } from "@prisma/client";

export const themeAtom = atom<"light" | "dark" | "inherit">("dark");
export const userAtom = atom<null | DatabaseUserAttributes>(null);
export const deviceListAtom = atom<Device[]>([]);
