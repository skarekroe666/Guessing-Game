import React, { useState } from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const GuessGame = () => {
    const randomNum = Math.floor(Math.random() * 100) + 1;

    const [targetNum] = useState(randomNum);
    const [guess, setGuess] = useState("");
    const [message, setMessage] = useState("");
    const [attempts, setAttempts] = useState(0);

    const handleGuess = () => {
        const numGuess = parseInt(guess, 10);

        if (isNaN(numGuess)) {
            setMessage("Enter a valid number");
            return;
        }

        setAttempts((prev) => prev + 1);

        if (numGuess === targetNum) {
            setMessage(`🎉You guessed the number in ${attempts + 1} attempts`);
        } else if (numGuess < targetNum) {
            setMessage("The number is higher‼️");
        } else {
            setMessage("The number is lower‼️");
        }

        setGuess("");
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <Card className="w-96 bg-white shadow-md rounded-lg p-5">
                <CardHeader className="text-center my-5">
                    <CardTitle className='my-6'>
                        <h1 className="text-3xl font-semibold text-gray-800">
                            Guess the Number
                        </h1>
                        <h3 className="text-lg text-gray-600">Between 1 - 100</h3>
                    </CardTitle>
                    <CardDescription className="mt-4">
                        <Input
                            type="text"
                            value={guess}
                            onChange={(e) => setGuess(e.target.value)}
                            placeholder="Enter a number"
                            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-indigo-500"
                        />
                    </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                    <Button
                        onClick={handleGuess}
                        variant="default">
                        Submit
                    </Button>
                </CardContent>
                <CardFooter className="flex flex-col items-center gap-3 text-center">
                    <p className="text-gray-800">{message}</p>
                    <p className="text-gray-600 font-medium">Attempts: {attempts}</p>
                </CardFooter>
            </Card>
        </div>
    );
};

export default GuessGame;