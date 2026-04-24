export const USERS: Record<string, string> = {
  Connor: "Connorcasey16!",
  Casey: "Connorcasey16!",
};

export const AUTH_COOKIE = "ocjr_session";

export function validateCredentials(username: string, password: string): boolean {
  const expected = USERS[username];
  return typeof expected === "string" && expected === password;
}

export function makeSessionToken(username: string): string {
  return Buffer.from(`${username}:${Date.now()}`).toString("base64");
}

export function readSessionUser(token: string | undefined): string | null {
  if (!token) return null;
  try {
    const decoded = Buffer.from(token, "base64").toString("utf-8");
    const [username] = decoded.split(":");
    if (username && USERS[username]) return username;
    return null;
  } catch {
    return null;
  }
}
