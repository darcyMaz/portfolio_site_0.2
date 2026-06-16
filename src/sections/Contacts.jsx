import { AlertCircle, Check, CheckCircle } from "lucide-react";

export const Contacts = () => {
    return (
    <section id="contact" className="py-32 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-highlight/5 rounded-full blur-3xl"/>
        </div>




        <div className="container mx-auto px-6 relative z-10">
            {/* Header */}
            <div>
                <span> Get in touch! </span>
                <h2> Let's build {' '} <span> something great. </span> </h2>

                <p>

                </p>
            </div>

            <div>
                <div>
                    <form>
                        <div>
                            <label>
                                Name
                            </label>
                            <input/>
                        </div>

                        <div>
                            <label>
                                Email
                            </label>
                            <input/>
                        </div>

                        <div>
                            <label>
                                Message
                            </label>
                            <input/>
                        </div>

                        <Button></Button>

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