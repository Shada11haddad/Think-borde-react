import React, { useEffect, useState } from "react";
import Navbar from "../components/NavBar";
import RateLimitedUI from "../components/RateLimitedUI";
import NoteCard from "../components/NoteCard";
import NotesNotFound from "../components/NoteNotFound.jsx";
import api from "../lib/axios";
import toast from "react-hot-toast";

function HomePage() {
  const [isRateLimited, setIsRateLimited] = useState(false);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await api.get("/notes");
        console.log(res.data);
        setNotes(res.data);
        setIsRateLimited(false);
      } catch (error) {
        console.error("Error fetching notes", error);
        if (error.response?.status === 429) {
          setIsRateLimited(true);
        } else {
          toast.error("Failed to load notes");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchNotes();
  }, []);

  return (

    
    <div className="min-h-screen bg-base-200 text-base-content">
      <Navbar />

      {isRateLimited && <RateLimitedUI />}

      <div className="max-w-7xl mx-auto px-4 py-10">
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
          Your Notes
        </h2>

        {loading && (
          <div className="text-center text-primary py-10 animate-pulse">
            Loading notes...
          </div>
        )}

        {!loading && notes.length === 0 && !isRateLimited && <NotesNotFound />}

        {!loading && notes.length > 0 && !isRateLimited && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {notes.map((note) => (
              <NoteCard key={note._id} note={note} setNotes={setNotes} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default HomePage;
