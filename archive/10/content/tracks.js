export const title = "Tracks & Challenges";

export const cards = [
    {
        // icon: "https://icon.now.sh/bubble_chart/ffffff",
        type: "track",
        title: "First Timers' Track",
        href: "https://github.com/hack-rice/HR9-First-Timers-Track",
        text: "Websites and webpages are the building blocks of the internet and currently, there exists a website for almost any entity in existence, so in light of recent events, our challenge for you is to create one to support social justice! In this track, your goal is to create a website/webpage related to social justice, we’ll leave the specifics of the purpose to your desire."
    },
    {
        // icon: "https://icon.now.sh/user/ffffff",
        type: "track",
        title: "Biomedical Track",
        href: "https://github.com/hack-rice/HR9-Ethics-Track",
        text: "This track is an opportunity to work at the interface between computer science and medicine. People with healthcare interests and backgrounds can use computation and technology to strategize and find creative solutions to health-related problems on a global scale. Tech can be designed to handle large data sets, extrapolate outcomes, and promote good behaviors."
    },
    {
        // icon: "https://icon.now.sh/border_color/ffffff",
        type: "track",
        title: "Finance Track",
        href: "https://github.com/hack-rice/HR9-Design-Track",
        text: "In the midst of the coronavirus pandemic, economies around the globe have been significantly impacted: from plummeting stocks to businesses shutting down and record high unemployment rates in some places. Many aspects of the economy have become more reliant on technology throughout the years, but the spread of COVID-19 has expedited this process."
    },
    {
        // icon: "https://icon.now.sh/timeline/ffffff",
        type: "track",
        title: "Data Science and Machine Learning Track",
        href: "https://github.com/hack-rice/HR9-DS-ML-Track",
        text: "This track will allow you to explore interesting data sets using machine learning and other data science techniques. The goal is simple – find something interesting in your data and present it in a compelling manner. Projects with a social impact are especially encouraged."
    },
    {
        // icon: "https://icon.now.sh/bitcoin/ffffff",
        type: "challenge",
        title: "Bill.com",
        href: "https://docs.google.com/document/d/154aVkbCMp0_NQgSIhCm5t5iqqsXPrrmygN0p7_g7qX4/edit",
        text: (
            <>
                <p>
                    At Bill.com, we are constantly looking for new and exciting ways to make
                    it simple for business owners to connect and do business. To this year's
                    hackers we ask: "What are some outside of the box ways to leverage
                    technology to accomplish this?"
                </p>
                <p>
                    We want to challenge you to reimagine our user experience by embedding
                    Bill.com everywhere, and will be providing home devices, smartwatches and
                    tablets for anyone interested in developing on these systems.
                </p>
                <p>
                    The Bill.com team will work closely with hackers to leverage the Bill.com
                    API and client libraries, and host a Q&A workshop to help get teams up and
                    running with their projects. We look forward to meeting all of the this
                    year's participants and seeing what you all come up with!
                </p>
            </>
        )
    },
    {
        // icon: "https://icon.now.sh/local_gas_station/ffffff",
        type: "challenge",
        title: "Schlumberger",
        text:
            "From classical statistical methods to real-time constraint optimization, Bayesian neural networks, and reinforcement learning, Schlumberger uses Machine Learning to gain maximum insight from huge volumes of data.  Our challenge for you: use Machine Learning to solve a problem of your choice.  We will grade you on your idea, your implementation, and the amount of fun you had hacking! "
    },
    {
        // icon: "https://icon.now.sh/local_gas_station/ffffff",
        type: "challenge",
        title: "Chevron’s real-time work order scheduling optimization",
        text: (
            <>
                <p>
                    Background: Chevron has large scale operations and complex process facilities (refineries and
                    liquified natural gas production facilities). Scheduling work orders on these facilities with differing repair
                    requirements, specialized technicians, and potentially hours of drive time between locations can be
                    difficult.
                </p>

                <p>
                    Challenge: Build a work order tracking system that tracks (1) the work orders that are submitted and
                    (2) the technicians that are completing them to optimize how technicians are assigned and work orders
                    are completed. Knowing where technicians are, what they are certified/qualified to repair, how long they
                    are planning to being there, other work orders in the same or nearby location, etc will be invaluable in
                    being able to dynamically schedule and dispatch existing and new work orders to technicians at the
                    beginning of the day and while onsite. Updating each technician with their schedule of work orders can
                    be done through any means of mobile technology, SMS, call, mobile app, etc.
                </p>

                <p>
                    Data set <a className="styledlink" href="https://drive.google.com/file/d/0B8KsuSvk0vSINUktRHNnbXhCdVoxS19qRWZxNnZzZFRsMWZN/view?usp=sharing">here</a>!
                </p>
            </>
        )

    },
    {
        // icon: "https://icon.now.sh/facebook/ffffff",
        type: "challenge",
        title: "Facebook",
        text: (
            <>
                <p>Best Algorithmically Complex App:</p>
                <p>We challenge you to put the skills Luay has taught you to good use.</p>
                <p>Oculus Gos will be awarded to the team that utilizes a non-trivial algorithm or AI as part of their application to create value for users.</p>
                <p>While external libraries and services may be used to aid your app, we will only evaluate the components of the app created by your team.</p>
            </>
        )
    },
    {
        // icon: "https://icon.now.sh/airplanemode_active/ffffff",
        type: "challenge",
        title: "ForeFlight: Airport Recommendation Challenge",
        href: "http://bit.ly/HackRiceForeFlight2019",
        text: (
            <>
                <p>
                    A pilot decides she wants to go flying this weekend because the weather is
                    really nice, but she can’t decide where she wants to go. We know what airports
                    she’s flown to in the past; what’s an airport she’s never been to but would
                    enjoy flying to? Use our historical data to build a machine learning model that
                    can recommend a new flying destination. Then, if you’re up for the challenge,
                    package the model into an iOS app for on-the-go flight planning!
                </p>
            </>
        )
    },
    {
        // icon: "https://icon.now.sh/domain/ffffff",
        type: "challenge",
        href: "http://api.reimaginebanking.com/",
        title: "Capital One",
        text:
            "Best Financial Hack: How will you reimagine banking?"
    },
    {
        // icon: "https://icon.now.sh/merge_type/ffffff",
        type: "challenge",
        title: "Two Sigma",
        text:
            "At Two Sigma, we use machine learning, distributed computing and other technologies to find connections in the world’s data. We work with vast quantities of information from over a thousand diverse sources. We love learning from others, and we want to see what you can do in the data science space. We’ll award a prize for the best use of data analysis, data science, or big data technologies."
    },

].map(card => {
    card.key = `card-${card.title}`;
    return card;
});
