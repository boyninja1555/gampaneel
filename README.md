<div align="center">
    <h1>Gampaneel</h1>
    <p>Official Monorepo</p>
</div>

---

Hey server owners and general developers! Today you are viewing the source code of a **Game server management panel focused on Minecraft: Java Edition**, as it says in the **About** section. Or are you not? Whatever.

**Why?**

Gampaneel was created because existing panels suck. Take one look at the average server host (likely uses Pterodactyl) and tell me how laggy and ugly it is! We decided to change that in the form of not a reskin or fork, but a clean slate because this minor issue is **that** bad.

This works by connecting to the backend through a WebSocket connection ([socket.io](https://socket.io) to be specific), authenticating, and sending requests from the UI until the owner exits.

**Frontend**  
[The frontend](frontend/) can be deployed once and work for **any** server through manual address input! For anyone looking to own a hosting service, you can redirect the user to an instance of the frontend and specify a `?u=YOUR_BACKEND_URL` query parameter to make the redirect seamless.

**Backend**  
[The backend](backend/) is deployed per server software (because it controls the server directly) but **should** be lightweight!
