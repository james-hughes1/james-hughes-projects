const projects = [
  {
    id: "project-1",
    title: "Rate My Bookshelf",
    description: "Give users information about a bookshelf. (Docker, Image Segmentation/OCR, Google Cloud)",
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
    title: "Alpha Modelling",
    description: "Generating buy-side signals for SBUX. (Quantitative analysis, Systematic Backtesting)",
    imageUrl: "/alpha-dashboard.png", // eslint-disable-next-line
    details: "This is an interactive quantitative modelling project that allowed me to explore systematic alpha generation and backtesting.\
\n\nI built a weekly alpha model for SBUX that predicts next-week excess returns relative to SPY using a combination of historical alpha, momentum, macroeconomic, and liquidity factors.\
\n\nThe project includes a dashboard where users can adjust signal thresholds and transaction costs to see cumulative strategy versus buy-and-hold performance, with key metrics like Sharpe ratio, win rate, and max drawdown dynamically updated.\
",
    github: "https://github.com/james-hughes1/sbux-signal-model",
    websitelink: "https://sbux-model.vercel.app/"
  },
  {
    id: "project-4",
    title: "AI Research with the Cambridge University Biotech Dept.",
    description: "Enhancing super-resolution microscopy with computer vision techniques.",
    imageUrl: "/sim-small.png", // eslint-disable-next-line
    details: "This project formed the basis of my dissertation at the end of my MPhil studies.\
 For the project I collaborated with the Department of Chemical Engineering and Biotechnology,\
 specifically the Laser Analytics Group, who very generously supported this project and invited me to use their lab equipment.\
 The goal of the project was to assess the reproducibility of the results from a paper published in Nature [1] in 2023.\
 The paper claimed to have used a particular architecture of neural network to augment an established method of super-resolution microscopy known as structured illumination, or SIM.\
 \n\nKey achievements of the project:\
 \n\nML/DS principles applied to real scientific research. This was a unique chance to see some of the techniques that I have learnt about being used in action.\
 It was extremely valuable to have conversations with experts at the frontier of scientific research, discussing the benefits and challenges of novel data-driven approaches to this specific field.\
 \n\nReproducing RCAN architecture using a different deep learning framework.\
 The original network architecture used by the researchers was implemented in Tensorflow.\
 This was incompatible with the compute resources I was using for training, so I had to migrate the whole code to PyTorch carefully to ensure reproducibility.\
 This helped me to develop fluency in both packages.\
 \n\nNavigated a steep learning curve in an unfamiliar domain.\
 I completed this work to a high-quality (my final grade was 82/100) despite having next to zero prior understanding of how fluorescence microscopy worked.\
 Alongside the core research I had to also quickly learn the fundamentals of this field.\
 In the same vein, much of the data I collected myself from the labs with an actual SIM microscope, which was also very new (and exciting) coming from a mathematics background.\
 \n\nSynthetic data. The rest of the data used for the project was generated synthetically using data from the Visible Human Project [2] as a foundation.\
 This enabled me to achieve the goals of the project without wasting time collecting data.\
 \n\n[1] https://www.nature.com/articles/s41587-022-01651-1\
 \n\n[2] https://www.nlm.nih.gov/research/visible/visible_human.html\
 ",
    github: "https://github.com/james-hughes1/sim_denoising",
    websitelink: `${process.env.PUBLIC_URL}/mphildis_project.pdf`
  },
  {
    id: "project-5",
    title: "HR Chatbot",
    description: "RAG Engineering at work. (RAG, Evaluation Frameworks)",
    imageUrl: "/chatbot.png",
    details: "This is an internal project that I joined, to help update to version 2.0 at work. In that process, I helped the team to achieve an evaluation score of 0.64, up from 0.37. We co-authored a though-piece on this work at the link above.",
    github: "",
    websitelink: "https://ekimetrics.github.io/blog/Wombat_HR_v2"
  },
  {
    id: "project-6",
    title: "Game of Life",
    description: "Supercomputer simulations. (C++, Optimisation/Parallelism, HPC/SLURM)",
    imageUrl: "/gol-small.png", // eslint-disable-next-line
    details: "This project formed part of my advanced software engineering coursework during my MPhil.\
 The goal was to build a highly optimised, scalable simulation of Conway's Game of Life, using the project as a vehicle to explore high-performance C++ programming and modern parallel computing techniques.\
 The work was carried out on the CSD3 HPC clusters, requiring careful configuration of SLURM environments, MPI topologies, and multi-threaded execution.\
 \n\nKey achievements of the project:\
 \n\nApplied HPC and systems-level engineering to a real scientific computing problem. The project required deep engagement with memory layout, cache behaviour, computational complexity, and cluster-level performance.\
 I gained hands-on experience running large simulation experiments at scale and interpreting how algorithmic choices interact with hardware.\
 \n\nDesigned and optimised core algorithms for large-scale performance. I refactored the neighbour-counting routine using a separable convolution approach, reducing operations per cell and achieving ~8x speed improvements.\
 I also redesigned rule-evaluation logic to eliminate branch mispredictions, resulting in cleaner and faster code.\
 \n\nImplemented hybrid MPI & OpenMP parallelisation. I developed both 1D and 2D domain decomposition strategies and wrote efficient halo-exchange communication patterns.\
 Within each MPI rank, I threaded performance-critical sections using OpenMP, achieving up to ~66% speed-ups on large simulations.\
 \n\nSoftware engineering best practices under performance pressure. I built a modular codebase with clearly separated grid logic, boundary handling, and simulation evolution.\
 A full GoogleTest suite ensured correctness during aggressive optimisation and refactoring.\
 \n\nNavigated complex HPC workflows and tooling. I became fluent in configuring SLURM submissions, managing environment modules, and optimising thread/process pinning on multi-core architectures.\
 This experience significantly improved my confidence working on cluster-scale systems.\
 ",
    github: "https://github.com/james-hughes1/game-of-life-hpc",
    websitelink: `${process.env.PUBLIC_URL}/game_of_life.pdf`
  },
  {
    id: "project-7",
    title: "Diffusion MNIST",
    description: "Image generation. (PyTorch, ML Engineering)",
    imageUrl: "/diffusion.png", // eslint-disable-next-line
    details: "This project formed the basis of my coursework report during my MPhil in Machine Learning.\
 For the project I implemented and analysed diffusion-based generative models on the MNIST dataset,\
 developing the project as a reusable Python package and scaling experiments on the Cambridge CSD3 HPC cluster.\
 The goal was to compare standard Gaussian noise diffusion with a novel custom degradation operator inspired by cold diffusion frameworks.\
 \n\nFor the uninitiated, diffusion is a generative AI approach which relies on adding (gaussian) noise to an input (here an image),\
 and then training a model to denoise that image, across a range of intensities of degradation.\
 When successful, you can then simply generate random gaussian noise, and use this as a 'seed' to generate the desired image.\
 In this project I applied this method to the MNIST handwritten digit dataset.\
 I then stretched the method by coming up with my own original degradation operator, one which permutes pixels in the image randomly.\
 The distance between swapped pixels is controlled by the intensity of the operator (see the image at the top of this page for a demo!)\
 \n\nKey achievements of the project:\
 \n\nApplied ML engineering principles to generative modelling.\
 I designed reproducible training pipelines with config-driven hyperparameter control, model checkpointing, and automated sampling.\
 This helped me to strengthen my engineering workflow and software practices.\
 \n\nCombined creativity with theory.\
 I implemented a pixel-swapping operator as an alternative to Gaussian noise,\
 which required looking to state-of-the-art research as inspiration,\
 whilst balancing this with feasibility.\
 This led me to create a custom PyTorch class which helped me become familiar with the library,\
 and also take into consideration computational complexity.\
 \n\nHigh-performance computing.\
 I successfully trained models over hundreds of epochs on HPC resources,\
 allowing me to develop my ability to scale experiments and manage compute-intensive workloads.\
 \n\nCritical evaluation of generative AI.\
 The project highlights the challenges of evaluating generative AI software systematically.\
 I used thorough visual inspection of real samples, alongside quantitative analysis of the generated images,\
 to tune my models.\
 One interesting part of the analysis (see the report!!) was using t-SNE for non-linear dimensionality reduction,\
 which I applied to both the MNIST dataset and a generated sample of images.\
 I could then visually compare the distribution of generated images and ground-truth, and even\
 extend this by building a gaussian means model or using Kullback-Leibler divergence to assess image generation.\
 ",  
    github: "https://github.com/james-hughes1/diffusion-mnist/",
    websitelink: `${process.env.PUBLIC_URL}/generating_digits.pdf`
  },
];

export default projects;
