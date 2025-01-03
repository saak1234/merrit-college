"use client";
import { useState } from "react";
import { Mail, Lock, Eye, EyeOff, User } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function AuthForm() {
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState<{ auth?: string; email?: string; password?: string; name?: string }>({});
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const router = useRouter();

    const validateForm = () => {
        const newErrors: { email?: string; password?: string; name?: string } = {};

        if (!isLogin && (!formData.name || formData.name.trim().length < 2)) {
            newErrors.name = "Name must be at least 2 characters long";
        }

        if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Please enter a valid email address";
        }

        if (!formData.password || formData.password.length < 6) {
            newErrors.password = "Password must be at least 6 characters long";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
        if (errors[name as keyof typeof errors]) {
            setErrors((prev) => ({
                ...prev,
                [name]: "",
            }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validateForm()) return;

        setIsLoading(true);

        try {
            const endpoint = isLogin ? "/api/auth/login" : "/api/auth/register";
            const response = await fetch(endpoint, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    password: formData.password,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Authentication failed");
            }

            if (data.token) {
                localStorage.setItem("authToken", data.token);

                if (!isLogin) {
                    setIsLogin(true);
                    setFormData({ name: "", email: "", password: "" });
                    setErrors({});
                    localStorage.removeItem("authToken");
                    router.push("/auth-page");
                    return;
                }

                router.push("/");
            }
        } catch (error) {
            if (error instanceof Error) {
                setErrors({ auth: error.message || "Invalid credentials" });
            } else {
                setErrors({ auth: "Invalid credentials" });
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-secondary-green">
            <div className="flex min-h-screen">
                {/* Left Section */}
                <div className="hidden lg:flex lg:w-1/2 bg-green-800 p-12 flex-col justify-between relative overflow-hidden">
                    {/* Logo */}
                    <div className="absolute top-6 left-6 z-20">
                        <Image
                            src="/mc_logo.png"
                            alt="Merrit College Logo"
                            width={200}
                            height={200}
                            className="rounded-full"
                        />
                    </div>

                    <div className="relative z-10 mt-20">
                        {/*<div className="flex items-center gap-4 mb-12">*/}
                        {/*    <div className="p-3 bg-white/10 rounded-lg backdrop-blur-sm">*/}
                        {/*        <GraduationCap className="text-white h-8 w-8" />*/}
                        {/*    </div>*/}
                        {/*    <BookOpen className="text-white h-8 w-8" />*/}
                        {/*</div>*/}
                        <h1 className="text-5xl font-bold text-white mb-6">
                            {isLogin ? "Welcome Back to Merrit College" : "Join Merrit College"}
                        </h1>
                        <p className="text-green-100 text-xl leading-relaxed mb-8">
                            {isLogin
                                ? "Sign in to access your student portal, course materials, and connect with your academic community."
                                : "Create your account to begin your educational journey with us."}
                        </p>
                        <div className="grid grid-cols-2 gap-4 text-green-100 mb-4">
                            <div className="p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                                <h3 className="font-semibold mb-1">Student Portal</h3>
                                <p className="text-sm">Access your courses and grades</p>
                            </div>
                            <div className="p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                                <h3 className="font-semibold mb-1">Resources</h3>
                                <p className="text-sm">Library and study materials</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center gap-8 mb-6">
                        <Image
                            src="/academic-9.jpg"
                            alt="Student Image"
                            width={200}
                            height={150}
                            className="rounded-lg"
                        />
                        <Image
                            src="/grad-admission.jpg"
                            alt="Graduation Ceremony"
                            width={200}
                            height={150}
                            className="rounded-lg"
                        />
                    </div>
                </div>

                {/* Right Section */}
                <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
                    <div className="w-full max-w-md space-y-8">
                        <div className="text-center">
                            <h2 className="text-3xl font-bold text-gray-900">
                                {isLogin ? "Sign in to your account" : "Create your account"}
                            </h2>
                            <p className="mt-2 text-gray-600">
                                {isLogin ? "New to Merritt College? " : "Already have an account? "}
                                <button
                                    onClick={() => {
                                        setIsLogin(!isLogin);
                                        setErrors({});
                                        setFormData({ name: "", email: "", password: "" });
                                    }}
                                    className="text-green-600 hover:text-green-500 font-medium transition-colors"
                                >
                                    {isLogin ? "Create an account" : "Sign in"}
                                </button>
                            </p>
                        </div>

                        {errors.auth && (
                            <div className="bg-red-50 text-red-700 p-4 rounded-lg text-sm">
                                {errors.auth}
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                            <div className="space-y-5">
                                {!isLogin && (
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                        <div className="relative group">
                                            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-green-500 transition-colors" size={18} />
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all hover:border-green-500"
                                                placeholder="Enter your full name"
                                            />
                                            {errors.name && (
                                                <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                                            )}
                                        </div>
                                    </div>
                                )}

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                    <div className="relative group">
                                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-green-500 transition-colors" size={18} />
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all hover:border-green-500"
                                            placeholder="you@example.com"
                                        />
                                        {errors.email && (
                                            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                                        )}
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                                    <div className="relative group">
                                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-green-500 transition-colors" size={18} />
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            name="password"
                                            value={formData.password}
                                            onChange={handleChange}
                                            className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all hover:border-green-500"
                                            placeholder="••••••••"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-green-500 transition-colors"
                                        >
                                            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                        </button>
                                        {errors.password && (
                                            <p className="text-red-500 text-xs mt-1">{errors.password}</p>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <button
                                    type="submit"
                                    className={`w-full py-3 px-4 text-white bg-green-600 rounded-lg hover:bg-green-500 transition-colors focus:ring-4 focus:ring-green-300 ${
                                        isLoading ? "opacity-50 cursor-not-allowed" : ""
                                    }`}
                                    disabled={isLoading}
                                >
                                    {isLoading ? "Submitting..." : isLogin ? "Sign In" : "Create Account"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
