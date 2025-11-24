export function ContactSection() {
  const email = 'iamchirag182@gmail.com';
  
  return (
    <section className="mb-16 animate-fade-in-up">
      <h2 className="text-2xl font-bold mb-6 flex items-center text-foreground">
        <span className="text-accent mr-2">*</span> contact
      </h2>
      <div className="space-y-4">
        <p className="text-foreground opacity-80">Feel free to reach out for collaborations or just to say hi!</p>
        <div className="flex items-center">
          <span className="text-muted-foreground mr-2">Email:</span>
          <a 
            href={`mailto:${email}`}
            className="text-accent hover:underline flex items-center group transition-colors duration-200"
          >
            {email}
            <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
