import { AlertCircle, Check, CheckCircle } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { Button } from "@/components/Button";


export const Contacts = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [submitStatus, setSubmitStatus] = useState({
        type:null,
        message: "",
    });

    const handleSubmit = async (e) => {
        e.preventdefault();

        setIsLoading(true);
        setSubmitStatus({
            type:null, message:"",
        });
        try {
            const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
            const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
            const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

            if (!serviceId || !templateId || !publicKey) {
                throw new Error("EmailJS configuration is missing. Please check your environment variables.");
            }

            await emailjs.send(serviceId, templateId,
                {
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                },
                publicKey
            );

            setSubmitStatus(
                {
                    type: "success",
                    message: "Message has been successfully sent! I'll get back to you soon."
                }
            );
            setFormData({name: "", email: "", message: "",});
        }
        catch (err) {
            console.err("EmailJS error: ", err);
            setSubmitStatus({
                type: "error",
                message: err.text || "Failed to send message. Please try again",
            });
        }
        finally {
            setIsLoading(false);
        }
    };

    return (
    <section id="contact" className="py-32 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-highlight/5 rounded-full blur-3xl"/>
        </div>

        <div className="container mx-auto px-6 relative z-10">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in"> Get in touch! </span>
                <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground"> Let's build {' '} <span className="font-serif italic font-normal text-white"> something great. </span> </h2>

                <p className="text-muted-background animate-fade-in animation-delay-200">
                    Reach out to me for any reason! Whether it's to hear more about me and my games or to chat about my family's farm.
                </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                <div className="glass p-8 rounded-3xl border border-primary/30 animate-fade-in animation-delay-300">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-2">
                                Name
                            </label>
                            <input id="name" type="text" required placeholder="Your name..." value={formData.name} 
                                onChange={(e) => setFormData({...formData, name: e.target.value})} 
                                className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"/>
                        </div>

                        <div>
                            <label htmlFor="email" type="email" className="block text-sm font-medium mb-2">
                                Email
                            </label>
                            <input required placeholder="your@email.com" value={formData.email} 
                                onChange={(e) => setFormData({...formData, email: e.target.value})} 
                                className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"/>
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium mb-2">
                                Name
                            </label>
                            <textarea rows={5} required placeholder="Your message..." value={formData.message} 
                                onChange={(e) => setFormData({...formData, message: e.target.value})} 
                                className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"/>
                        </div>

                        <Button className="w-full" type="submit" size="lg" disabled={isLoading}>
                            {isLoading ? (<>Sending...</>) : (<>Send Message <Send className="w-5 h-5"/> </>)}
                        </Button>

                        {submitStatus.type && (
                            <div className={`flex items-center gap-3 p-4 rounded-xl ${
                                submitStatus.type === "success"
                                ? "bg-green-500/10 border border-green-500/20 text-green-400"
                                : "bg-red-500/10 border border-red-500/20 text-red-400"
                            }`}>
                                {submitStatus.type === "success" ? (<CheckCircle className="w-5 h-5 shrink-0"/>) : (<AlertCircle className="w-5 h-5 shrink-0"/>)}
                                <p className="text-sm">{submitStatus.message}</p>
                            </div>
                        )}
                    </form>
                </div>

                {/* Removed contact info section. */}

            </div>
        </div>
        

    </section>
    );
}