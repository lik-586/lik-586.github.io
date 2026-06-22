// 多语言翻译配置
const translations = {
    en: {
        // 头部
        subtitle: 'Northeastern University at Qinhuangdao | C++ & Python Enthusiast | OS Kernel & AI Developer',
        seeking: '👋 I am seeking internships in Backend or AI Engineering.',
        location: '📍 Qinhuangdao / Remote',
        
        // 简介
        intro: 'I\'m a Junior at <strong>NEUQ</strong> passionate about digging into system internals and LLMs.',
        intro1: 'Built an <strong>OS Kernel Simulator</strong> with C++ focusing on concurrency.',
        intro2: 'Developed an <strong>AI Companion</strong> with persistent memory using DeepSeek.',
        intro3: 'Exploring <strong>NLP/ML</strong> through toxicity prediction and classification projects.',
        intro4: 'Open to internships. Feel free to email me!',
        
        // 链接
        links: 'Links',
        email: 'Email',
        skills: 'Skills',
        
        // 项目
        projects: 'Featured Projects',
        tech: 'Tech',
        github_link: 'View on GitHub →',
        
        // 项目 1: OS Kernel Simulator
        project1_title: 'OS Kernel Simulator — High Concurrency File System',
        project1_1: 'Designed <strong>DiskManager</strong> using POSIX <code>mmap</code>/<code>msync</code> for physical disk simulation.',
        project1_2: 'Implemented <strong>FAT</strong> file system with LRU buffer pool (16 pages, 64B/page).',
        project1_3: 'Built <strong>MessageQueue</strong> and priority-based <strong>ProcessScheduler</strong> using semaphores.',
        project1_4: 'Real-time <strong>MonitorPanel</strong> for FAT table, buffer pool, and disk usage visualization.',
        
        // 项目 2: AI Companion
        project2_title: 'AI Companion — Roleplay & Memory System',
        project2_1: 'Built an AI chatbot with <strong>persistent memory</strong> and emotional roleplay capabilities.',
        project2_2: 'Designed a dynamic <strong>System Prompt</strong> mechanism for personality injection.',
        project2_3: 'Implemented CRUD operations for chat history using local <strong>JSON storage</strong>.',
        project2_4: 'Achieved millisecond-level streaming response and seamless context switching.',
        
        // 项目 3: Jigsaw Toxicity Prediction
        project3_title: 'Jigsaw Toxicity Prediction — NLP Classification',
        project3_1: 'Built a <strong>text toxicity classifier</strong> using Transformer-based models.',
        project3_2: 'Processed and analyzed large-scale <strong>NLP datasets</strong> for sentiment analysis.',
        project3_3: 'Implemented multi-label classification for various toxicity types.',
        project3_4: 'Achieved competitive performance on Kaggle Jigsaw competition benchmarks.',
        
        // 项目 4: PyTorch Test
        project4_title: 'PyTorch Deep Learning Lab',
        project4_1: 'Experimented with various <strong>neural network architectures</strong> and training techniques.',
        project4_2: 'Implemented custom <strong>loss functions</strong> and optimization strategies.',
        project4_3: 'Explored <strong>model optimization</strong> techniques including quantization and pruning.',
        
        // 项目 5: EM Classification App
        project5_title: 'EM Classification App — Streamlit Visualization',
        project5_1: 'Built an interactive <strong>Expectation-Maximization</strong> algorithm visualization.',
        project5_2: 'Implemented real-time <strong>clustering visualization</strong> with Streamlit.',
        project5_3: 'Designed intuitive UI for parameter tuning and result exploration.',
        
        // 教育
        education: 'Education',
        collage: 'Northeastern University at Qinhuangdao',
        major: 'Computer Science',
        courses: 'Core Courses:',
        course_list: 'Data Structures (84), OS Principles (83), Compilation (83), Java (90)'
    },
    zh: {
        // 头部
        subtitle: '东北大学秦皇岛分校| C++ & Python 爱好者 | 操作系统内核 & AI 开发者',
        seeking: '👋 正在寻找后端或AI工程实习岗位。',
        location: '📍 秦皇岛 / 远程',
        
        // 简介
        intro: '我是<strong>东北大学</strong>大三学生，热衷于探索系统底层和大语言模型。',
        intro1: '使用 C++ 开发了<strong>操作系统内核模拟器</strong>，专注于并发编程。',
        intro2: '基于 DeepSeek 开发了具有持久记忆的<strong>AI 伴侣</strong>。',
        intro3: '通过毒性预测和分类项目探索<strong>NLP/ML</strong>领域。',
        intro4: '欢迎实习机会，随时联系我！',
        
        // 链接
        links: '链接',
        email: '邮箱',
        skills: '技能',
        
        // 项目
        projects: '精选项目',
        tech: '技术栈',
        github_link: '查看 GitHub →',
        
        // 项目 1: OS Kernel Simulator
        project1_title: '操作系统内核模拟器 — 高并发文件系统',
        project1_1: '使用 POSIX <code>mmap</code>/<code>msync</code> 设计<strong>DiskManager</strong>实现物理磁盘模拟。',
        project1_2: '实现<strong>FAT</strong>文件系统，包含 LRU 缓冲池（16 页，每页 64B）。',
        project1_3: '构建<strong>MessageQueue</strong>和基于优先级的<strong>ProcessScheduler</strong>，使用信号量同步。',
        project1_4: '实时<strong>MonitorPanel</strong>监控面板，可视化 FAT 表、缓冲池和磁盘使用率。',
        
        // 项目 2: AI Companion
        project2_title: 'AI 伴侣 — 角色扮演与记忆系统',
        project2_1: '构建了具有<strong>持久记忆</strong>和情感角色扮演能力的 AI 聊天机器人。',
        project2_2: '设计了动态<strong>System Prompt</strong>机制实现个性化注入。',
        project2_3: '使用本地<strong>JSON 存储</strong>实现聊天记录 CRUD 操作。',
        project2_4: '实现毫秒级流式响应和无上下文切换。',
        
        // 项目 3: Jigsaw Toxicity Prediction
        project3_title: 'Jigsaw 毒性预测 — NLP 文本分类',
        project3_1: '使用 Transformer 模型构建<strong>文本毒性分类器</strong>。',
        project3_2: '处理和分析大规模<strong>NLP 数据集</strong>进行情感分析。',
        project3_3: '实现多标签分类，识别多种毒性类型。',
        project3_4: '在 Kaggle Jigsaw 竞赛基准上取得竞争力表现。',
        
        // 项目 4: PyTorch Test
        project4_title: 'PyTorch 深度学习实验室',
        project4_1: '实验各种<strong>神经网络架构</strong>和训练技术。',
        project4_2: '实现自定义<strong>损失函数</strong>和优化策略。',
        project4_3: '探索<strong>模型优化</strong>技术，包括量化剪枝。',
        
        // 项目 5: EM Classification App
        project5_title: 'EM 分类应用 — Streamlit 可视化',
        project5_1: '构建交互式<strong>期望最大化算法</strong>可视化。',
        project5_2: '使用 Streamlit 实现实时<strong>聚类可视化</strong>。',
        project5_3: '设计直观的参数调整和结果探索界面。',
        
        // 教育
        education: '教育背景',
        collage: '东北大学秦皇岛分校',
        major: '计算机科学与技术',
        courses: '核心课程：',
        course_list: '数据结构 (84), 操作系统原理 (83), 编译原理 (83), Java (90)'
    }
};

// 导出配置
window.translations = translations;