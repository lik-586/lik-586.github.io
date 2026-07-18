const translations = {
    en: {
        nav_intro: 'About',
        nav_contact: 'Link',
        nav_skills: 'Skills',
        nav_tech_projects: 'Tech Projects',
        nav_tech_skills: 'Technical Skills',
        nav_operation_experience: 'Operation Experience',
        nav_operation_projects: 'Campus Experience',
        nav_operation_skills: 'Operation Skills',
        nav_education: 'Education',

        tab_general: '\uD83D\uDD39 General',
        tab_tech: '\uD83D\uDCBB Tech',
        tab_operation: '\uD83C\uDFAE Operation',

        subtitle: 'Northeastern University at Qinhuangdao | C++ & Python Developer | AI & Game Operations',
        seeking: '\uD83D\uDC4B I am seeking internships in Backend, AI Engineering or Game Operations.',
        location: '\uD83D\uDCCD Qinhuangdao / Remote',
        available: '\uD83D\uDCC5 Available July',

        intro: "I'm a Junior at <strong>NEUQ</strong> with a dual focus on <strong>software development</strong> and <strong>game operations</strong>. Passionate about digging into system internals, LLMs, and building community engagement.",
        intro1: '<strong>Technical Skills:</strong> Built an OS Kernel Simulator with C++, developed AI Companion with DeepSeek, explored NLP through toxicity prediction projects.',
        intro2: '<strong>Game Operations:</strong> Created gaming community content, operated class WeChat public account (70+ articles), managed hometown group (160+ members).',
        intro3: '<strong>Content Creation:</strong> Multi-platform content distribution on Bilibili, Xiaohongshu, NGA; proficient in Canva, PS, PR, Excel, SQL, Python.',
        intro4: '<strong>Career Goal:</strong> Combining technical background with operations expertise to drive product growth and user engagement.',

        links: 'Links',
        email: 'Email',
        skills: 'Skills',

        projects: 'Featured Projects',
        tech: 'Tech',
        github_link: 'View on GitHub \u2192',

        project1_title: 'OS Kernel Simulator — High Concurrency File System',
        project1_1: 'Designed <strong>DiskManager</strong> using POSIX <code>mmap</code>/<code>msync</code> for physical disk simulation.',
        project1_2: 'Implemented <strong>FAT</strong> file system with LRU buffer pool (16 pages, 64B/page).',
        project1_3: 'Built <strong>MessageQueue</strong> and priority-based <strong>ProcessScheduler</strong> using semaphores.',
        project1_4: 'Real-time <strong>MonitorPanel</strong> for FAT table, buffer pool, and disk usage visualization.',

        project2_title: 'AI Companion — Roleplay & Memory System',
        project2_1: 'Built an AI chatbot with <strong>persistent memory</strong> and emotional roleplay capabilities.',
        project2_2: 'Designed a dynamic <strong>System Prompt</strong> mechanism for personality injection.',
        project2_3: 'Implemented CRUD operations for chat history using local <strong>JSON storage</strong>.',
        project2_4: 'Achieved millisecond-level streaming response and seamless context switching.',

        project3_title: 'Jigsaw Toxicity Prediction — NLP Classification',
        project3_1: 'Built a <strong>text toxicity classifier</strong> using Transformer-based models.',
        project3_2: 'Processed and analyzed large-scale <strong>NLP datasets</strong> for sentiment analysis.',
        project3_3: 'Implemented multi-label classification for various toxicity types.',
        project3_4: 'Achieved competitive performance on Kaggle Jigsaw competition benchmarks.',

        project4_title: 'PyTorch Deep Learning Lab',
        project4_1: 'Experimented with various <strong>neural network architectures</strong> and training techniques.',
        project4_2: 'Implemented custom <strong>loss functions</strong> and optimization strategies.',
        project4_3: 'Explored <strong>model optimization</strong> techniques including quantization and pruning.',

        project5_title: 'EM Classification App — Streamlit Visualization',
        project5_1: 'Built an interactive <strong>Expectation-Maximization</strong> algorithm visualization.',
        project5_2: 'Implemented real-time <strong>clustering visualization</strong> with Streamlit.',
        project5_3: 'Designed intuitive UI for parameter tuning and result exploration.',

        education: 'Education',
        collage: 'Northeastern University at Qinhuangdao',
        major: 'Computer Science',
        courses: 'Core Courses:',
        course_list: 'Data Structures (84), OS Principles (83), Compilation (83), Java (90)',

        op_exp1_title: 'Zenless Zone Zero Content Creation | Content Operation',
        op_exp1_1: 'Participated in official creator incentive program, wrote "Potential Image In-depth Analysis" design article.',
        op_exp1_2: 'Analyzed character lifecycle management system from three dimensions: mechanism rework, version operation, player feedback.',
        op_exp1_3: 'Published on Mihoyo Community and distributed to Bilibili, Xiaohongshu. Demonstrated multi-platform content distribution capability.',

        op_exp4_title: 'Honkai: Star Rail Content Creation | Content Operation',
        op_exp4_1: 'Obtained "Evolution Test" beta qualification through official recruitment channels.',
        op_exp4_2: 'Wrote attribute system design analysis article from emotional value, UGC ecosystem, and multi-push perspectives.',
        op_exp4_3: 'Proposed data tracking optimization suggestions. Articles distributed across three platforms with 5000+ views.',

        op_exp2_title: 'Class WeChat Public Account Operator | New Media & User Operation',
        op_exp2_1: 'Published <strong>70+ original articles</strong> covering activity push, league day records, class announcements.',
        op_exp2_2: 'Pushed outdoor league day articles to college-level public account with 500+ views.',
        op_exp2_3: 'Mastered complete content production chain from topic selection to layout and publishing.',

        op_exp3_title: 'Shaanxi Hometown Community Manager | User Operation',
        op_exp3_1: 'Managed Shaanxi hometown group (160 members), planned 1 large hometown welcome party and multiple small activities.',
        op_exp3_2: 'Responsible for activity promotion, personnel coordination and on-site execution.',
        op_exp3_3: 'Maintained community activity through regular topic interactions, improving member stickiness and sense of belonging.',

        op_proj1_title: 'Publicity Committee',
        op_proj1_1: 'Responsible for daily publicity affairs of CS Class 2306, continuously operated class public account, published 100+ articles covering activity pushes, league day records, class announcements, current affairs, study enhancement, holiday greetings, etc.',
        op_proj1_2: 'Original content rate over 70%. Published promotional articles on college public account with 500+ views. Assisted in planning and publicizing daily league day activities.',
        op_proj1_3: 'Developed strong planning, publicity and organizational abilities.',

        op_proj2_title: 'College Youth Volunteer Association · Officer',
        op_proj2_1: 'Accumulated 100+ hours of volunteer service, coordinated multiple public welfare activities, responsible for volunteer recruitment, division of work and on-site execution.',
        op_proj2_2: 'Assisted in writing activity promotional articles in the department publicity center, undertaking nearly 50% of the writing work.',
        op_proj2_3: 'Participated in community service projects, contributing to social welfare.',

        op_skills_category: 'Skill Category',
        op_skills_description: 'Description',
        op_skills_content_creation: 'Content Creation',
        op_skills_content_creation_desc: 'Proficient in multi-platform content creation and distribution on Bilibili, Xiaohongshu, and Mihoyo Community. Skilled in video copywriting, graphic layout, and long-form content planning. Able to conduct content selection and production based on user needs.',
        op_skills_user_insight: 'User Insight',
        op_skills_user_insight_desc: 'Familiar with ACG/user ecosystem and content consumption preferences. Experienced in community operation, with abilities in content analysis, competitor comparison, and user feedback extraction.',
        op_skills_design_tools: 'Design Tools',
        op_skills_design_tools_desc: 'Proficient in Canva and basic Photoshop operations. Skilled in cover design and graphic layout.',
        op_skills_data_analysis: 'Data Analysis',
        op_skills_data_analysis_desc: 'Basic SQL, Excel (PivotTable, VLOOKUP). Understanding of core metrics including DAU, retention, and ARPU. Possesses data-driven content optimization awareness.',
        op_skills_tech_understanding: 'Technical Understanding',
        op_skills_tech_understanding_desc: 'Computer science background with knowledge of AI tools and Python. Able to understand data tracking logic and technical implementation plans, facilitating efficient collaboration with development teams.'
    },
    zh: {
        nav_intro: '\u5173\u4e8e\u6211',
        nav_contact: '\u94fe\u63a5',
        nav_skills: '\u6280\u80fd',
        nav_tech_projects: '\u6280\u672f\u9879\u76ee',
        nav_tech_skills: '\u6280\u672f\u6280\u80fd',
        nav_operation_experience: '\u8fd0\u8425\u7ecf\u5386',
        nav_operation_projects: '\u6821\u56ed\u7ecf\u5386',
        nav_operation_skills: '\u8fd0\u8425\u6280\u80fd',
        nav_education: '\u6559\u80b2\u80cc\u666f',

        tab_general: '\uD83D\uDD39 \u901a\u7528',
        tab_tech: '\uD83D\uDCBB \u6280\u672f\u65b9\u5411',
        tab_operation: '\uD83C\uDFAE \u8fd0\u8425\u65b9\u5411',

        subtitle: '\u4e1c\u5317\u5927\u5b66\u79e6\u7687\u5c9b\u5206\u6821 | C++ & Python \u5f00\u53d1\u8005 | AI & \u6e38\u620f\u8fd0\u8425',
        seeking: '\uD83D\uDC4B \u6b63\u5728\u5bfb\u627e\u540e\u7aef\u3001AI\u5de5\u7a0b\u6216\u6e38\u620f\u8fd0\u8425\u5b9e\u4e60\u5c97\u4f4d\u3002',
        location: '\uD83D\uDCCD \u79e6\u7687\u5c9b / \u8fdc\u7a0b',
        available: '\uD83D\uDCC5 7\u6708\u53ef\u5230\u5c97',

        intro: '\u6211\u662f<strong>\u4e1c\u5317\u5927\u5b66</strong>\u5927\u4e09\u5b66\u751f\uff0c\u4e13\u6ce8\u4e8e<strong>\u8f6f\u4ef6\u5f00\u53d1</strong>\u548c<strong>\u6e38\u620f\u8fd0\u8425</strong>\u4e24\u5927\u65b9\u5411\u3002\u70ed\u4e8e\u63a2\u7d22\u7cfb\u7edf\u5e95\u5c42\u3001\u5927\u8bed\u8a00\u6a21\u578b\u548c\u793e\u533a\u5efa\u8bbe\u3002',
        intro1: '<strong>\u6280\u672f\u80fd\u529b\uff1a</strong>\u4f7f\u7528C++\u5f00\u53d1\u4e86\u64cd\u4f5c\u7cfb\u7edf\u5185\u6838\u6a21\u62df\u5668\uff0c\u57fa\u4e8eDeepSeek\u5f00\u53d1AI\u4f34\u4fa3\uff0c\u901a\u8fc7\u6027\u601d\u9884\u6d4b\u9879\u76ee\u63a2\u7d22NLP\u9886\u57df\u3002',
        intro2: '<strong>\u6e38\u620f\u8fd0\u8425\uff1a</strong>\u521b\u4f5c\u6e38\u620f\u793e\u533a\u5185\u5bb9\uff0c\u8fd0\u8425\u73ed\u7ea7\u516c\u4f17\u53f7\uff0870+\u7bc7\u6587\u7ae0\uff09\uff0c\u7ba1\u7406\u8001\u4e61\u7fa4\uff08160+\u6210\u5458\uff09\u3002',
        intro3: '<strong>\u5185\u5bb9\u521b\u4f5c\uff1a</strong>B\u7ad9\u3001\u5c0f\u7ea2\u4e66\u3001NGA\u591a\u5e73\u53f0\u5206\u53d1\uff0c\u719f\u7ec3\u4f7f\u7528Canva\u3001PS\u3001PR\u3001Excel\u3001SQL\u3001Python\u3002',
        intro4: '<strong>\u804c\u4e1a\u76ee\u6807\uff1a</strong>\u7ed3\u5408\u6280\u672f\u80cc\u666f\u4e0e\u8fd0\u8425\u7ecf\u9a8c\uff0c\u9a71\u52a8\u4ea7\u54c1\u589e\u957f\u548c\u7528\u6237\u53c2\u4e0e\u3002',

        links: '\u94fe\u63a5',
        email: '\u90ae\u7bb1',
        skills: '\u6280\u80fd',

        projects: '\u7cbe\u9009\u9879\u76ee',
        tech: '\u6280\u672f\u6808',
        github_link: '\u67e5\u770b GitHub \u2192',

        project1_title: '\u64cd\u4f5c\u7cfb\u7edf\u5185\u6838\u6a21\u62df\u5668 \u2014\u2014 \u9ad8\u5e76\u53d1\u6587\u4ef6\u7cfb\u7edf',
        project1_1: '\u4f7f\u7528 POSIX <code>mmap</code>/<code>msync</code> \u8bbe\u8ba1<strong>DiskManager</strong>\u5b9e\u73b0\u7269\u7406\u78c1\u76d8\u6a21\u62df\u3002',
        project1_2: '\u5b9e\u73b0<strong>FAT</strong>\u6587\u4ef6\u7cfb\u7edf\uff0c\u5305\u542b LRU \u7f13\u51b2\u6c60\uff0816 \u9875\uff0c\u6bcf\u9875 64B\uff09\u3002',
        project1_3: '\u6784\u5efa<strong>MessageQueue</strong>\u548c\u57fa\u4e8e\u4f18\u5148\u7ea7\u7684<strong>ProcessScheduler</strong>\uff0c\u4f7f\u7528\u4fe1\u53f7\u91cf\u540c\u6b65\u3002',
        project1_4: '\u5b9e\u65f6<strong>MonitorPanel</strong>\u76d1\u63a7\u9762\u677f\uff0c\u53ef\u89c6\u5316 FAT \u8868\u3001\u7f13\u51b2\u6c60\u548c\u78c1\u76d8\u4f7f\u7528\u7387\u3002',

        project2_title: 'AI \u4f34\u4fa3 \u2014\u2014 \u89d2\u8272\u6295\u6c14\u4e0e\u8bb0\u5fc6\u7cfb\u7edf',
        project2_1: '\u6784\u5efa\u4e86\u5177\u6709<strong>\u6301\u4e45\u8bb0\u5fc6</strong>\u548c\u60c5\u611f\u89d2\u8272\u6295\u6c14\u80fd\u529b\u7684 AI \u804a\u5929\u673a\u5668\u4eba\u3002',
        project2_2: '\u8bbe\u8ba1\u4e86\u52a8\u6001<strong>System Prompt</strong>\u673a\u5236\u5b9e\u73b0\u4e2a\u6027\u5316\u6ce8\u5165\u3002',
        project2_3: '\u4f7f\u7528\u672c\u5730<strong>JSON \u5b58\u50a8</strong>\u5b9e\u73b0\u804a\u5929\u8bb0\u5f55 CRUD \u64cd\u4f5c\u3002',
        project2_4: '\u5b9e\u73b0\u6beb\u79d2\u7ea7\u6d41\u5f0f\u54cd\u5e94\u548c\u65e0\u4e0a\u4e0b\u6587\u5207\u6362\u3002',

        project3_title: 'Jigsaw \u6027\u601d\u9884\u6d4b \u2014\u2014 NLP \u6587\u672c\u5206\u7c7b',
        project3_1: '\u4f7f\u7528 Transformer \u6a21\u578b\u6784\u5efa<strong>\u6587\u672c\u6027\u601d\u5206\u7c7b\u5668</strong>\u3002',
        project3_2: '\u5904\u7406\u548c\u5206\u6790\u5927\u89c4\u6a21<strong>NLP \u6570\u636e\u96c6</strong>\u8fdb\u884c\u60c5\u611f\u5206\u6790\u3002',
        project3_3: '\u5b9e\u73b0\u591a\u6807\u7b7e\u5206\u7c7b\uff0c\u8bc6\u522b\u591a\u79cd\u6027\u601d\u7c7b\u578b\u3002',
        project3_4: '\u5728 Kaggle Jigsaw \u7ade\u8d5b\u57fa\u51c6\u4e0a\u53d6\u5f97\u7ade\u4e89\u529b\u8868\u73b0\u3002',

        project4_title: 'PyTorch \u6df1\u5ea6\u5b66\u4e60\u5b9e\u9a8c\u5ba4',
        project4_1: '\u5b9e\u9a8c\u5404\u79cd<strong>\u795e\u7ecf\u7f51\u7edc\u67b6\u6784</strong>\u548c\u8bad\u7ec3\u6280\u672f\u3002',
        project4_2: '\u5b9e\u73b0\u81ea\u5b9a\u4e49<strong>\u635f\u5931\u51fd\u6570</strong>\u548c\u4f18\u5316\u7b56\u7565\u3002',
        project4_3: '\u63a2\u7d22<strong>\u6a21\u578b\u4f18\u5316</strong>\u6280\u672f\uff0c\u5305\u62ec\u91cf\u5316\u526a\u679d\u3002',

        project5_title: 'EM \u5206\u7c7b\u5e94\u7528 \u2014\u2014 Streamlit \u53ef\u89c6\u5316',
        project5_1: '\u6784\u5efa\u4ea4\u4e92\u5f0f<strong>\u671f\u671b\u6700\u5927\u5316\u7b97\u6cd5</strong>\u53ef\u89c6\u5316\u3002',
        project5_2: '\u4f7f\u7528 Streamlit \u5b9e\u73b0\u5b9e\u65f6<strong>\u805a\u7c7b\u53ef\u89c6\u5316</strong>\u3002',
        project5_3: '\u8bbe\u8ba1\u76f4\u89c2\u7684\u53c2\u6570\u8c03\u6574\u548c\u7ed3\u679c\u63a2\u7d22\u754c\u9762\u3002',

        education: '\u6559\u80b2\u80cc\u666f',
        collage: '\u4e1c\u5317\u5927\u5b66\u79e6\u7687\u5c9b\u5206\u6821',
        major: '\u8ba1\u7b97\u673a\u79d1\u5b66\u4e0e\u6280\u672f',
        courses: '\u6838\u5fc3\u8bfe\u7a0b\uff1a',
        course_list: '\u6570\u636e\u7ed3\u6784 (84), \u64cd\u4f5c\u7cfb\u7edf\u539f\u7406 (83), \u7f16\u8bd1\u539f\u7406 (83), Java (90)',

        op_exp1_title: '\u7edd\u533a\u96f6\u5185\u5bb9\u521b\u4f5c\u9879\u76ee | \u5185\u5bb9\u8fd0\u8425',
        op_exp1_1: '\u53c2\u4e0e\u7edd\u533a\u96f6\u5b98\u65b9\u521b\u4f5c\u8005\u6fc0\u52b1\u8ba1\u5212\uff0c\u64b0\u5199\u300a\u6f5c\u80fd\u5f71\u50cf\u6df1\u5ea6\u5206\u6790\u300b\u8bbe\u8ba1\u89e3\u8bfb\u6587\u7ae0\u3002',
        op_exp1_2: '\u4ece\u673a\u5236\u91cd\u505a\u3001\u7248\u672c\u8fd0\u8425\u3001\u73a9\u5bb6\u53cd\u9988\u4e09\u4e2a\u7ef4\u5ea6\u5206\u6790\u8001\u89d2\u8272\u751f\u547d\u5468\u671f\u7ba1\u7406\u7cfb\u7edf\u3002',
        op_exp1_3: '\u53d1\u5e03\u4e8e\u7c73\u6e38\u793e\u5e76\u540c\u6b65\u5206\u53d1\u81f3B\u7ad9\u3001\u5c0f\u7ea2\u4e66\u4e09\u5e73\u53f0\u3002',

        op_exp4_title: '\u5d29\u574f\uff1a\u56e0\u7f18\u7cbe\u7075\u5185\u5bb9\u521b\u4f5c\u9879\u76ee | \u5185\u5bb9\u8fd0\u8425',
        op_exp4_1: '\u901a\u8fc7\u5b98\u65b9\u62db\u52df\u6e20\u9053\u83b7\u5f97\u201c\u8fdb\u5316\u6d4b\u8bd5\u201d\u4e8c\u6d4b\u8d44\u683c\u3002',
        op_exp4_2: '\u6d4b\u8bd5\u540e\u4e3b\u52a8\u64b0\u5199\u5c5e\u6027\u7cfb\u7edf\u8bbe\u8ba1\u5206\u6790\u6587\u7ae0\uff0c\u4ece\u60c5\u7eea\u4ef7\u503c\u524d\u7f6e\u3001UGC\u4f20\u64ad\u751f\u6001\u3001\u591a\u76ee\u63a8\u624b\u4e09\u4e2a\u7ef4\u5ea6\u62c6\u89e3\u8fd0\u8425\u5de7\u601d\u3002',
        op_exp4_3: '\u63d0\u51fa\u201c\u52a0\u70b9\u504f\u597d\u4e0e\u7559\u5b58\u5173\u8054\u5206\u6790\u201d\u7684\u6570\u636e\u57cb\u70b9\u4f18\u5316\u5efa\u8bae\u3002\u6587\u7ae0\u540c\u6b65\u5206\u53d1\u81f3\u7c7b\u6e38\u793e\u3001\u5c0f\u7ea2\u4e66\u3001B\u7ad9\u4e09\u5e73\u53f0\uff0c\u9605\u8bfb\u91cf5000+\u3002',

        op_exp2_title: '\u73ed\u7ea7\u516c\u4f17\u53f7\u8fd0\u8425 | \u65b0\u5a92\u4f53\u8fd0\u8425\u0026\u7528\u6237\u8fd0\u8425',
        op_exp2_1: '\u6301\u7eed\u8fd0\u8425\u73ed\u7ea7\u516c\u4f17\u53f7\uff0c\u7d2f\u8ba1\u8f93\u51fa\u539f\u521b\u5185\u5bb970\u7bc7+\uff0c\u6db5\u76d6\u6d3b\u52a8\u63a8\u6587\u3001\u56e2\u65e5\u8bb0\u5f55\u3001\u73ed\u7ea7\u901a\u77e5\u7b49\u54c1\u7c7b\u3002',
        op_exp2_2: '\u953b\u70bc\u4ece\u53d7\u4f17\u89c2\u89d2\u63d0\u70bc\u4fe1\u606f\u91cd\u70b9\u7684\u654f\u611f\u5ea6\u3002\u5411\u9662\u7ea7\u516c\u4f17\u53f7\u63a8\u9001\u6237\u5916\u56e2\u65e5\u63a8\u6587\uff0c\u9605\u8bfb\u91cf\u8d85500+\u3002',
        op_exp2_3: '\u719f\u6089\u4ece\u9009\u9898\u7b56\u5212\u5230\u6392\u7248\u53d1\u5e03\u7684\u5b8c\u6574\u5185\u5bb9\u751f\u4ea7\u94fe\u8def\u3002',

        op_exp3_title: '\u5b66\u6821\u9655\u897f\u8001\u4e61\u7fa4\u8fd0\u8425 | \u7528\u6237\u8fd0\u8425',
        op_exp3_1: '\u8fd0\u8425\u672c\u6821\u9655\u897f\u8001\u4e61\u7fa4\uff08160\u4eba\uff09\uff0c\u7b56\u5212\u5e76\u6267\u884c1\u6b21\u5927\u578b\u8001\u4e61\u8fd0\u65b0\u4f1a\u53ca\u591a\u6b21\u7ebf\u4e0a/\u7ebf\u4e0b\u5c0f\u578b\u6d3b\u52a8\u3002',
        op_exp3_2: '\u8d1f\u8d23\u6d3b\u52a8\u5ba3\u4f20\u3001\u4eba\u5458\u534f\u8c03\u4e0e\u73b0\u573a\u6267\u884c\u3002',
        op_exp3_3: '\u901a\u8fc7\u5b9a\u671f\u8bdd\u9898\u4e92\u52a8\u548c\u6d3b\u52a8\u7ec4\u7ec7\u7ef4\u6301\u793e\u7fa4\u6d3b\u8dc3\u5ea6\uff0c\u63d0\u5347\u6210\u5458\u7c98\u6027\u4e0e\u5f52\u5c5e\u611f\u3002',

        op_proj1_title: '\u5ba3\u4f20\u59d4\u5458',
        op_proj1_1: '\u8d1f\u8d23\u8ba1\u79d12306\u73ed\u65e5\u5e38\u5ba3\u4f20\u4e8b\u52a1\uff0c\u6301\u7eed\u8fd0\u8425\u73ed\u7ea7\u516c\u4f17\u53f7\uff0c\u7d2f\u8ba1\u53d1\u5e03\u63a8\u6587100+\u7bc7\uff0c\u6db5\u76d6\u6d3b\u52a8\u63a8\u6587\u3001\u56e2\u65e5\u8bb0\u5f55\u3001\u73ed\u7ea7\u901a\u77e5\u3001\u65f6\u4e8b\u901f\u9020\u3001\u5b66\u4e60\u5f3a\u56fd\u3001\u8282\u65e5\u95ee\u5019\u7b49\u3002',
        op_proj1_2: '\u539f\u521b\u7387\u8d8570%\uff0c\u5728\u5b66\u9662\u516c\u4f17\u53f7\u6295\u7a3f\u53d1\u5e03\u5ba3\u4f20\u63a8\u6587\uff0c\u9605\u8bfb\u91cf500+\uff0c\u534f\u52a9\u7b56\u5212\u4e0e\u5ba3\u4f20\u65e5\u5e38\u56e2\u65e5\u6d3b\u52a8\u3002',
        op_proj1_3: '\u57f9\u517b\u8f83\u5f3a\u7684\u7b56\u5212\u5ba3\u4f20\u4ee5\u53ca\u7ec4\u7ec7\u80fd\u529b\u3002',

        op_proj2_title: '\u9662\u9752\u5e74\u5fd7\u613f\u8005\u534f\u4f1a \u00b7 \u5e72\u4e8b',
        op_proj2_1: '\u7d2f\u8ba1\u5fd7\u613f\u670d\u52a1\u65f6\u957f100+\u5c0f\u65f6\uff0c\u534f\u8c03\u7ec4\u7ec7\u516c\u76ca\u6d3b\u52a8\u591a\u573a\uff0c\u8d1f\u8d23\u5fd7\u613f\u8005\u62db\u52df\u3001\u5206\u5de5\u4e0e\u73b0\u573a\u6267\u884c\u3002',
        op_proj2_2: '\u540c\u65f6\u5728\u90e8\u95e8\u5ba3\u4f20\u4e2d\u5fc3\u534f\u52a9\u64b0写\u6d3b\u52a8\u5ba3\u4f20\u63a8\u6587\uff0c\u627f\u62c5\u8fd150%\u7684\u64b0\u5199\u5de5\u4f5c\u3002',
        op_proj2_3: '\u53c2\u4e0e社\u533a\u670d\u52a1\u9879目，为社会公益事业做出贡献。',

        op_skills_category: '\u6280\u80fd\u7c7b\u522b',
        op_skills_description: '\u8be6\u7ec6\u63cf\u8ff0',
        op_skills_content_creation: '\u5185\u5bb9\u521b\u4f5c',
        op_skills_content_creation_desc: '\u719f\u6089B\u7ad9\u3001\u5c0f\u7ea2\u4e66\u3001\u7c7b\u6e38\u793e\u7b49\u591a\u5e73\u53f0\u5185\u5bb9\u521b\u4f5c\u4e0e\u5206\u53d1\uff0c\u5177\u5907\u89c6\u9891\u6587\u6848\u7b56\u5212\u3001\u56fe\u6587\u6392\u7248\u3001\u957f\u56fe\u6587\u7b56\u5212\u80fd\u529b\uff0c\u80fd\u4ece\u7528\u6237\u9700\u6c42\u51fa发\u8fdb\u884c\u5185\u5bb9\u9009\u9898\u4e0e\u751f产\u3002',
        op_skills_user_insight: '\u7528\u6237\u6d1e\u5bdf',
        op_skills_user_insight_desc: '\u719f\u6089\u4e8c\u6b21\u5143/ACG\u7528\u6237\u751f\u6001\u4e0e\u5185\u5bb9\u6d88\u8d39\u504f\u597d\uff0c\u62e5\u6709\u793e\u7fa4\u8fd0\u8425\u7ecf\u9a8c\uff0c\u5177\u5907\u5185\u5bb9\u62c6\u89e3\u3001\u7ade\u54c1\u5bf9\u6bd4\u4e0e\u7528\u6237\u53cd\u9988\u63d0\u70bc\u80fd\u529b\u3002',
        op_skills_design_tools: '\u8bbe\u8ba1\u5de5\u5177',
        op_skills_design_tools_desc: '\u638c\u6e38\u793e\u7b49\u591a\u5e73\u53f0\u5185\u5bb9\u521b\u4f5c\u4e0e\u5206\u53d1\uff0c\u5177\u5907\u89c6\u9891\u6587\u6848\u7b56\u5212\u3001\u56fe\u6587\u6392\u7248\u3001\u957f\u56fe\u6587\u7b56\u5212\u80fd\u529b\uff0c\u80fd\u4ece\u7528\u6237\u9700\u6c42\u51fa发\u8fdb\u884c\u5185\u5bb9\u9009\u9898\u4e0e\u751f产\u3002',
        op_skills_data_analysis: '\u6570\u636e\u5206\u6790',
        op_skills_data_analysis_desc: '\u57fa\u7840SQL\u3001Excel\uff08\u6570\u636e\u8f74\u8fd0\u8868\u3001VLOOKUP\uff09\uff0c\u4e86\u89e3DAU\u3001\u7559\u5b58\u3001ARPU\u7b49\u6838\u5fc3\u6570\u636e\uff0c\u5177\u5907\u6570\u636e\u9a71\u52a8\u5185\u5bb9\u4f18\u5316\u7684\u610f\u8bc6\u3002',
        op_skills_tech_understanding: '\u6280\u672f\u7406\u89e3',
        op_skills_tech_understanding_desc: '\u8ba1\u7b97\u673a\u4e13\u4e1a\u80cc\u666f\uff0c\u4e86\u89e3AI\u5de5\u5177\uff0c\u719f\u6089Python\uff0c\u80fd\u7406\u89e3\u6570\u636e\u57cb\u70b9\u903b\u8f91\u4e0e\u6280\u672f\u5b9e\u73b0\u65b9\u6848\uff0c\u9ad8\u654f\u5bf9\u63a5\u7814\u53d1\u56e2\u961f\u3002'
    }
};

window.translations = translations;