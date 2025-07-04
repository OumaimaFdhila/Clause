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

