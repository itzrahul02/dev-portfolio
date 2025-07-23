"use client"

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Github, Linkedin, Mail, Twitter, Music, MessageCircle, Quote } from "lucide-react";
import dynamic from "next/dynamic";

export default function Home() {
  const [spotifyData, setSpotifyData] = useState(null);
  const [quote, setQuote] = useState("");
  const [chatMessage, setChatMessage] = useState("");
  const [chatResponse, setChatResponse] = useState("");

  // Fetch Spotify data (currently playing track)
  useEffect(() => {
    const fetchSpotifyData = async () => {
      try {
        const response = await fetch("/api/spotify");
        const data = await response.json();
        setSpotifyData(data);
      } catch (error) {
        console.error("Error fetching Spotify data:", error);
      }
    };
    fetchSpotifyData();
  }, []);

  // Fetch a random quote
  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await fetch("https://api.quotable.io/random");
        const data = await response.json();
        setQuote(data.content);
      } catch (error) {
        console.error("Error fetching quote:", error);
      }
    };
    fetchQuote();
  }, []);

  // Handle chatbot message submission
//   const handleChatSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch("/api/chat", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ message: chatMessage }),
//       });
//       const data = await response.json();
//       setChatResponse(data.reply);
//     } catch (error) {
//       console.error("Error sending chat message:", error);
//     }
//   };

  return (
    <div className="relative flex min-h-screen items-center justify-center p-6 bg-background overflow-hidden">

      <div className="relative z-10 max-w-4xl w-full space-y-8 bg-background/90 backdrop-blur-sm p-8 rounded-lg shadow-lg">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-center animate-fade-in">
          Welcome to My Space
        </h1>

        {/* Social Links */}
        <div className="flex justify-center space-x-4">
          <Button variant="ghost" size="icon" className="hover:scale-110 transition-transform duration-300" asChild>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" className="hover:scale-110 transition-transform duration-300" asChild>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" className="hover:scale-110 transition-transform duration-300" asChild>
            <a href="mailto:john.doe@example.com">
              <Mail className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" className="hover:scale-110 transition-transform duration-300" asChild>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Twitter className="h-5 w-5" />
            </a>
          </Button>
        </div>

        {/* Spotify Integration */}
        <Card className="animate-fade-in-up">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Music className="h-5 w-5" /> Currently Playing
            </CardTitle>
          </CardHeader>
          <CardContent>
            {spotifyData ? (
              <div className="space-y-2">
                {/* <p className="font-medium">{spotifyData.title}</p> */}
                {/* <p className="text-sm text-muted-foreground">{spotifyData.artist}</p> */}
              </div>
            ) : (
              <p className="text-muted-foreground">Not playing anything right now.</p>
            )}
          </CardContent>
        </Card>

        {/* Chatbot Section */}
        <Card className="animate-fade-in-up delay-100">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageCircle className="h-5 w-5" /> Chatbot
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <Input
                value={chatMessage}
                onChange={(e) => setChatMessage(e.target.value)}
                placeholder="Type a message..."
                required
              />
              <Button type="submit" className="w-full">
                Send
              </Button>
            </form>
            {chatResponse && (
              <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                <p className="text-sm">{chatResponse}</p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Random Quote Generator */}
        <Card className="animate-fade-in-up delay-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Quote className="h-5 w-5" /> Random Quote
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="italic">"{quote}"</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}