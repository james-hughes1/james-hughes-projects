const projects = [
  {
    id: "project-1",
    title: "Rate My Bookshelf",
    description: "Give users information about a bookshelf (Docker, Image Segmentation/OCR, Google Cloud)",
    imageUrl: "/book-hero.png", // eslint-disable-next-line
    details: "Rate My Bookshelf is a webapp that combines image segmentation, OCR, and an LLM API to provide a fun analysis of your bookshelf, or a bookshelf that you have found out in the wild.\
 \n\nThe UX (click the link above to try) comprises three stages: the user uploads a photo, the webapp processes on whilst on the loading screen, and then the user lands on a descriptive analysis page.\
 When the photo is uploaded (alongside text input if in Library mode) the one of two backend api calls is made.\
 In Home mode, the goal is to give a terse description of the user's tastes based on their own bookshelf.\
 The processing segments the bookshelf using a custom algorithm I developed, runs a lightweight deep OCR model (RapidOCR), locates the text scanned and combines strings by book spines segmented, and then passes this data to an API call to get the analysis (three words describing their shelf, a series of bipolar metrics such as classic vs modern, and a book recommendation).\
 In Library mode, the goal is to return a nice processed image of the bookshelf they are looking at, and highlight which book they should read/buy based on the accompanying text input.\
 This processing flow is a bit more complex; the first API call returns the recommendation and the second API call takes the recommended book segment as an input and returns the highlighted image.\
 \n\nBelow I list some of the interesting features implemented and tools used.\
 \n\nImage segmentation: Custom algorithm which detects rectangles in a tree-based fashion using Sobel convolution.\
 I originally tried such classical methods as Felzenszwalb, SLIC, and Watershed [1] but these didn't produce exactly what I was looking for.\
 \n\nOCR: Implemented using RapidOCR [2]. I initially used EasyOCR but this was a performance bottleneck (in terms of loading time) - RapidOCR is faster and enables the code container to shrink from 10GB to 2GB due to the lack of heavy dependencies like PyTorch.\
 \n\nLLM API call: This done using Gemini Flash 2.5. Structured JSON outputs are a huge help here, as well as some simple prompt tuning.\
 This was also originally a bottleneck; previously I ran two api calls, one that extracted the books from the OCR scanned text, and a second producing the analysis.\
 Combining into a single prompt reduces token usage and makes the code faster, without compromising performance.\
 \n\nDeployment: For this project I decided to separate the front and backend of the code. The backend of the code uses FastAPI to create endpoints that call the previous processing features.\
 The full backend code is containerised using Docker and uploaded to Google Cloud, where it is hosted on Cloud Run.\
 \n\nFrontend: The frontend is created using React and Typescript.\
 \n\n[1] https://scikit-image.org/docs/stable/auto_examples/segmentation/plot_segmentations.html\
 \n\n[2] https://github.com/RapidAI/RapidOCR\
 ",
    github: "https://github.com/james-hughes1/rate-my-bookshelf-backend",
    websitelink: "https://rate-my-bookshelf.vercel.app/"
  },
  {
    id: "project-2",
    title: "Robo Dunk",
    description: "A sandbox for RL inference. (AWS & Monitoring, Reinforcement Learning, CI/CD)",
    imageUrl: "/robodunk-small.png", // eslint-disable-next-line
    details: "Robo Dunk is an interactive sandbox that enabled me to learn more about productionising machine learning models.\
 \n\nFor this project I created a simple physics game where the user controls a simple robot, and the goal is to hit a ball into the basket to score points.\
 I then trained a reinforcement learning model to play the game, using only the game image as an input.\
 Finally I created a webapp where this model is deployed and the user can change the parameters of the game (where the basket is, the robot's arm length etc.)\
 and watch the model play the game in the web browser, live.\
 \n\nSome interesting features implemented and tools used are listed below.\
 \n\nTesting-Led Development: I created a suite of unit tests to ensure the software runs as planned, especially as there are multiple scripts that use the game environment for different purposes (human play, model training, inference).\
 \n\nPyGame/PyMunk for environment creation: Most of the code goes into creating the environment, and then creating parent classes around the environment to enable inference and parallelisation for training.\
 The game itself is actually quite fun to play, and you can try it if you clone the repo locally.\
 This helps to put into context the challenge faced by the model - the game is not easy, and although the model has the advantage of structured rewards, it learns completely naively in a sense, having no prior conception of Earth physics or basketball or how to score points.\
 \n\nTraining: The training was done by using Stable Baselines and run on Google Colab. Vectorising the environment to run it across multiple CPUs led to a big training speed improvement.\
 \n\nCI/CD: The code has simple continuous integration features (linting and code formatting pre-commit hooks) and an automated Docker deployment to AWS from pushes on the master branch.\
 As a next step I would like to put the unit-test suite and linting/formatting into this automated workflow to protect the master branch.\
 \n\nAWS Deployment: The docker image is hosted on an elastic container registry (ECR) on AWS, and then the app itself is hosted on an EC2 instance.\
 The app has code within it that enables monitoring via AWS CloudWatch.\
 This enables monitoring of performance KPIs related to model inference such as latency and episode scores.\
 \n\nI also configured the site to run on my own custom domain, https://robot-sandbox.xyz\
 ",
    github: "https://github.com/james-hughes1/robo-dunk",
    websitelink: "https://robot-sandbox.xyz/"
  },
  {
    id: "project-3",
    title: "Microscopy with AI",
    description: "Research with Cambridge Biotech.",
    imageUrl: "/sim-small.png",
    details: "Description incoming, for now click the links above.",  
    github: "https://github.com/james-hughes1/sim_denoising",
    websitelink: `${process.env.PUBLIC_URL}/mphildis_project.pdf`
  },
  {
    id: "project-4",
    title: "HR Chatbot",
    description: "RAG Engineering at work. (RAG, Evaluation Frameworks)",
    imageUrl: "/chatbot.png",
    details: "This is an internal project that I joined, to help update to version 2.0 at work. In that process, I helped the team to achieve an evaluation score of 0.64, up from 0.37. We co-authored a though-piece on this work at the link above.",
    github: "",
    websitelink: "https://ekimetrics.github.io/blog/Wombat_HR_v2"
  },
  {
    id: "project-5",
    title: "Game of Life",
    description: "Supercomputer simulations. (C++, Parallelism/HPC/SLURM)",
    imageUrl: "/gol-small.png",
    details: "Description incoming, for now visit the GitHub or read the report.",
    github: "https://github.com/james-hughes1/game-of-life-hpc",
    websitelink: `${process.env.PUBLIC_URL}/game_of_life.pdf`
  },
  {
    id: "project-6",
    title: "Diffusion MNIST",
    description: "Image generation. (Doxygen, PyTorch, Generative AI)",
    imageUrl: "/diffusion.png",
    details: "Description incoming, for now visit the GitHub or read the report.",  
    github: "https://github.com/james-hughes1/diffusion-mnist/",
    websitelink: `${process.env.PUBLIC_URL}/generating_digits.pdf`
  },
  {
    id: "project-7",
    title: "Flag Puzzle",
    description: "A fast-paced flag guessing game. (Javascript, MongoDB, Frontend)",
    imageUrl: "/flagpuzzleimg.png",
    details: "Description incoming, for now visit the GitHub or visit the site.",  
    github: "https://github.com/james-hughes1/flagpuzzle",
    websitelink: "https://flagpuzzle.onrender.com"
  },
  {
    id: "project-8",
    title: "Poker Simulator",
    description: "Play poker with AI opponents. (LLM APIs, React)",
    imageUrl: "/pokersimimg.png",
    details: "Description incoming, for now visit the GitHub or visit the site.",
    github: "https://github.com/james-hughes1/pokersim",
    websitelink: "https://pokersim.vercel.app/"
  },
];

export default projects;
