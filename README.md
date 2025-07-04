# Clause - AI-Powered Worker Management

 <!-- It's highly recommended to add a screenshot or GIF of your application here! -->

**Clause** is a modern, AI-driven web application designed for intelligent worker management and tracking. It leverages real-time face recognition for seamless authentication and status updates, providing a robust solution for monitoring workforce presence and activity.

This project is built with a powerful, modern technology stack to deliver a fast, secure, and scalable experience.

## ✨ Key Features

-   **AI-Powered Face Recognition:** Utilizes a sophisticated AI model (`facenet_pytorch`) to transform user images into vector embeddings for highly accurate and secure identification.
-   **Real-Time Status Updates:** When a worker is identified, their status (e.g., "Checked-In," "Checked-Out," "On Break") is instantly updated in the central user database.
-   **Seamless Authentication:** The face recognition system integrates with **NextAuth.js**, providing a frictionless authentication flow without traditional passwords.
-   **Comprehensive Worker Tracking:** A centralized dashboard to view worker statuses, activity logs, and presence history.
-   **Modern & Responsive UI:** Built with **HeroUI** and Next.js for a clean, intuitive, and responsive user interface that works on any device.

## 🛠️ Tech Stack

-   **Frontend:** [Next.js](https://nextjs.org/) (React Framework)
-   **UI:** [HeroUI](https://heroui.dev/) & [Tailwind CSS](https://tailwindcss.com/)
-   **Backend (AI/ML Service):** [FastAPI](https://fastapi.tiangolo.com/) (Python)
-   **AI Model:** [FaceNet-PyTorch](https://github.com/timesler/facenet-pytorch) for generating facial embeddings.
-   **Database & BaaS:** [Supabase](https://supabase.io/)
-   **Authentication:** [NextAuth.js](https://next-auth.js.org/)

## 🚀 System Architecture

The application operates with a decoupled architecture for scalability and maintainability:

1.  **Image Capture (Frontend):** The Next.js frontend captures an image of the worker via a webcam or file upload.
2.  **AI Processing (Backend):** The image is sent to the **FastAPI** backend service.
3.  **Embedding Generation:** The FastAPI service uses the `facenet-pytorch` model to process the image and generate a unique facial embedding (a vector representation of the face).
4.  **Database Lookup:** This embedding is compared against the stored embeddings in the **Supabase** database to find a matching user.
5.  **Authentication & Status Update:** Upon a successful match, the user is authenticated, and their status is updated in the `users` table in real-time using Supabase's capabilities.
6.  **Real-Time Feedback (Frontend):** The Next.js application listens for database changes and reflects the updated user status on the UI immediately.

## 🏁 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

-   [Node.js](https://nodejs.org/en/) (v18.x or later)
-   [pnpm](https://pnpm.io/installation) (or npm/yarn)
-   [Python](https://www.python.org/downloads/) (v3.9 or later) & pip
-   A [Supabase](https://supabase.com/) account (for database and API keys).

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/clause.git
    cd clause
    ```

2.  **Set up Supabase:**
    -   Create a new project on Supabase.
    -   Go to the "SQL Editor" and create your `users` table (include columns for `id`, `name`, `status`, and `face_embedding`).
    -   Navigate to `Project Settings` > `API` to find your Project URL and `anon` public key.

3.  **Set up the Frontend (Next.js):**
    -   Create a `.env.local` file in the root directory. Copy the contents of `.env.local.example` (if you have one) or use the template below.
    -   Install dependencies and run the development server:
        ```bash
        pnpm install
        pnpm dev
        ```

4.  **Set up the Backend (FastAPI):**
    -   Navigate to the backend service directory (e.g., `cd backend`).
    -   Install Python dependencies:
        ```bash
        pip install -r requirements.txt
        ```
    -   Create a `.env` file in the backend directory for your Supabase credentials.
    -   Run the FastAPI server:
        ```bash
        uvicorn main:app --reload
        ```

### Environment Variables

Create a `.env.local` file in the root of the project for the Next.js app:

```env
# NextAuth
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET= # Generate a secret: openssl rand -base64 32

# Supabase (for Frontend)
NEXT_PUBLIC_SUPABASE_URL=YOUR_SUPABASE_PROJECT_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_KEY

# Backend API URL
NEXT_PUBLIC_FASTAPI_URL=http://127.0.0.1:8000
```

Create a `.env` file in your `/backend` directory for the FastAPI service:

```env
# Supabase (for Backend Service)
SUPABASE_URL=YOUR_SUPABASE_PROJECT_URL
SUPABASE_SERVICE_ROLE_KEY=YOUR_SUPABASE_SERVICE_ROLE_KEY
```

Your app should now be running!
-   Frontend: [http://localhost:3000](http://localhost:3000)
-   Backend API: [http://localhost:8000/docs](http://localhost:8000/docs)

## ☁️ Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

**Note:** The FastAPI backend service needs to be deployed separately on a platform that supports Python applications, such as [Render](https://render.com/), [Fly.io](https://fly.io/), or a traditional VPS. Remember to update the `NEXT_PUBLIC_FASTAPI_URL` environment variable in your Vercel project to point to your live backend URL.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.