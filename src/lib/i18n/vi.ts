import type { Dictionary } from "./types";

export const vi: Dictionary = {
  meta: {
    title: "AiTechX — Công ty phần mềm lấy AI làm trọng tâm",
    description:
      "AiTechX xây dựng phần mềm ứng dụng AI cho doanh nghiệp: hệ thống AI theo yêu cầu, nền tảng luyện gõ Typing Master, giải pháp quản trị sản xuất Workshop và trò chơi luyện gõ Word Rain.",
    keywords: [
      "công ty phần mềm AI",
      "phát triển AI Việt Nam",
      "phần mềm quản lý sản xuất",
      "luyện gõ bàn phím",
      "thị giác máy tính",
      "tích hợp LLM",
    ],
  },

  common: {
    learnMore: "Tìm hiểu thêm",
    explore: "Khám phá",
    getStarted: "Bắt đầu",
    bookDemo: "Đặt lịch demo",
    talkToUs: "Liên hệ với chúng tôi",
    contactSales: "Liên hệ kinh doanh",
    seeProducts: "Xem sản phẩm",
    viewProduct: "Xem sản phẩm",
    playFree: "Chơi miễn phí",
    backHome: "Về trang chủ",
    comingSoon: "Sắp ra mắt",
    new: "Mới",
    popular: "Phổ biến nhất",
    perProject: "mỗi dự án",
    perMonth: "mỗi tháng",
    custom: "Theo yêu cầu",
    from: "Từ",
    allRightsReserved: "Bảo lưu mọi quyền.",
    madeIn: "Thiết kế & phát triển tại Việt Nam",
  },

  nav: {
    products: "Sản phẩm",
    solutions: "Giải pháp",
    about: "Về chúng tôi",
    careers: "Tuyển dụng",
    contact: "Liên hệ",
    cta: "Đặt lịch demo",
    language: "Ngôn ngữ",
    openMenu: "Mở menu",
    closeMenu: "Đóng menu",
    skipToContent: "Chuyển đến nội dung",
  },

  hero: {
    badge: "Kỹ nghệ sản phẩm lấy AI làm trọng tâm",
    titleTop: "Phần mềm biết suy nghĩ,",
    titleAccent: "sản phẩm đủ sức mở rộng",
    description:
      "AiTechX thiết kế và đưa ra thị trường phần mềm ứng dụng AI cho những đội ngũ tham vọng — từ hệ thống thông minh theo yêu cầu đến các sản phẩm riêng trong giáo dục và sản xuất.",
    primaryCta: "Đặt lịch demo",
    secondaryCta: "Khám phá sản phẩm",
    terminalTitle: "aitechx — triển khai trực tiếp",
    terminalLines: [
      "$ aitechx deploy --product workshop",
      "✓ model: forecast-q3 đã huấn luyện · mae 1.8%",
      "✓ vision: qc-defect v4 · độ chính xác 99.2%",
      "✓ api: 42 endpoint · p95 61ms",
      "✓ hoàn tất sau 184s — https://aitechx.vn",
    ],
    typingLabel: "Demo trực tiếp — Typing Master",
    typingWords: [
      "độ chính xác là thói quen",
      "tốc độ đến từ sự chuẩn xác",
      "gõ. đo lường. tiến bộ.",
      "practice every single day",
    ],
    scroll: "Cuộn để khám phá",
    trustLabel: "Được tin dùng bởi các đội ngũ đang mở rộng quy mô",
  },

  stats: {
    label: "Những con số",
    items: [
      { value: 120, suffix: "+", label: "Dự án đã bàn giao" },
      { value: 42, suffix: "ms", label: "Độ trễ API trung vị" },
      { value: 18, suffix: "TB", label: "Dữ liệu xử lý mỗi tháng" },
      { value: 99.98, suffix: "%", label: "Thời gian hoạt động ổn định" },
    ],
  },

  products: {
    label: "Sản phẩm của chúng tôi",
    title: "Ba sản phẩm. Một sự cầu toàn.",
    description:
      "Những nền tảng đã được kiểm chứng, chúng tôi trực tiếp vận hành và liên tục cải tiến trong môi trường thực tế.",
    cta: "Khám phá sản phẩm",
    items: [
      {
        id: "typing-master",
        badge: "Giáo dục",
        name: "Typing Master",
        tagline: "Học gõ mười ngón, từng phím một.",
        description:
          "Ứng dụng luyện gõ mười ngón trên trình duyệt với khoá học tự mở khoá, thư viện đọc có hướng dẫn và phân tích tiến độ trung thực. Hoạt động offline, không cần tài khoản.",
        features: [
          "Khoá học 24 bài trong sáu chặng, mở lần lượt từng bài",
          "20 bài đọc có hướng dẫn từ các tác phẩm kinh điển phạm vi công cộng",
          "Bàn phím hướng dẫn trực tiếp với gợi ý ngón và phím kế tiếp",
          "Luyện tập tự do, bài sprint 60 giây và trò chơi Word rain",
          "Bảng tiến độ với xu hướng tốc độ, độ chính xác và chuỗi ngày",
        ],
      },
      {
        id: "workshop",
        badge: "Sản xuất",
        name: "Workshop",
        tagline: "Hệ điều hành cho toàn bộ nhà máy của bạn.",
        description:
          "Nền tảng quản trị sản xuất quy mô lớn: lập kế hoạch, điều độ, thực thi và đo lường — với dữ liệu nhà xưởng trực tiếp và dự báo bằng AI tích hợp sẵn.",
        features: [
          "BOM, MRP và hoạch định sản xuất đa cấp",
          "Theo dõi nhà xưởng trực tiếp với bảng Andon",
          "Phân tích OEE, thời gian dừng máy và chất lượng",
          "Dự báo nhu cầu và điều độ bằng AI",
          "Kết nối máy móc/IoT qua OPC-UA & MQTT",
        ],
      },
      {
        id: "word-rain",
        badge: "Trò chơi",
        name: "Word Rain",
        tagline: "Gõ những từ đang rơi trước khi chạm vạch.",
        description:
          "Trò chơi luyện gõ mười ngón: từ rơi như mưa và bạn gõ vỡ chúng trước khi chạm vạch đỏ. Mười hai chặng, và sao được trao cho độ chính xác — không bao giờ cho tốc độ.",
        features: [
          "12 chặng trong 4 chương, từ hàng cơ sở đến tốc độ",
          "Khoá mục tiêu với phím nghiêm ngặt, ưu tiên độ chính xác",
          "Hệ số chuỗi lên tới 3× khi đạt chuỗi 50 từ",
          "Sao xếp theo độ chính xác, không theo điểm hay tốc độ",
          "17 thành tích và hồ sơ tiến độ lưu trên thiết bị",
        ],
      },
    ],
  },

  features: {
    label: "Năng lực",
    title: "AI chuyên sâu, kỹ nghệ nghiêm túc",
    description:
      "Chúng tôi kết hợp học máy ứng dụng với những phần ít hào nhoáng — độ tin cậy, khả năng quan sát và kiến trúc sạch.",
    items: [
      {
        title: "AI ứng dụng & LLM",
        description:
          "Pipeline RAG, tác tử, tinh chỉnh và bộ đánh giá giúp mô hình luôn chính xác và có thể kiểm toán trong môi trường thực tế.",
      },
      {
        title: "Thị giác máy tính",
        description:
          "Phát hiện lỗi, OCR và kiểm tra bằng hình ảnh, chạy tại biên hoặc trên cloud, tối ưu cho điều kiện nhà máy thực tế.",
      },
      {
        title: "Phân tích dự báo",
        description:
          "Dự báo nhu cầu, phát hiện bất thường và dự đoán bảo trì với khoảng tin cậy đủ để lập kế hoạch.",
      },
      {
        title: "Kỹ nghệ cloud-native",
        description:
          "Đóng gói container, hạ tầng dưới dạng mã, tự động mở rộng và quan sát mặc định — phát hành hàng tuần không rắc rối.",
      },
      {
        title: "Tích hợp doanh nghiệp",
        description:
          "ERP, MES, CRM và hệ thống cũ được kết nối qua API bền bỉ, luồng sự kiện và hàng đợi thông điệp.",
      },
      {
        title: "Nền tảng dữ liệu",
        description:
          "Thu nhận dữ liệu luồng, mô hình hóa kho dữ liệu và truy xuất nguồn gốc để mọi mô hình được huấn luyện trên dữ liệu đáng tin.",
      },
    ],
  },

  solutions: {
    label: "Giải pháp",
    title: "Xây dựng quanh điểm nghẽn của bạn",
    description:
      "Dù bạn cần một sản phẩm, một nền tảng hay một đối tác để nâng tầm đội ngũ, chúng tôi bắt đầu từ nơi đang đau nhất.",
    items: [
      {
        title: "Sản phẩm AI theo yêu cầu",
        description:
          "Từ con số không đến khi ra mắt: khảo sát, nguyên mẫu, hệ thống production và đội ngũ vận hành.",
      },
      {
        title: "Chuyển đổi số",
        description:
          "Thay thế mớ bảng tính chắp vá bằng hệ thống kết nối và khả năng quan sát nhà xưởng theo thời gian thực.",
      },
      {
        title: "Nâng cao năng lực AI",
        description:
          "Đánh giá, tư vấn kiến trúc và đào tạo thực chiến để kỹ sư của bạn tự tin triển khai AI.",
      },
    ],
  },

  process: {
    label: "Cách chúng tôi làm việc",
    title: "Quy trình được thiết kế để bàn giao",
    description:
      "Vòng phản hồi ngắn, kết quả đo lường được, không bất ngờ sau sáu tháng.",
    steps: [
      {
        step: "01",
        title: "Khảo sát",
        description:
          "Chúng tôi nắm rõ quy trình của bạn, tìm ra vấn đề giá trị nhất và xác định tiêu chí thành công đo lường được.",
      },
      {
        step: "02",
        title: "Thiết kế",
        description:
          "Kiến trúc, chiến lược dữ liệu và thiết kế giao diện — được kiểm chứng bằng nguyên mẫu có thể nhấp.",
      },
      {
        step: "03",
        title: "Xây dựng",
        description:
          "Chu kỳ hai tuần, bản demo nhấp được, kiểm thử tự động và triển khai liên tục.",
      },
      {
        step: "04",
        title: "Mở rộng",
        description:
          "Giám sát, tái huấn luyện mô hình, tối ưu chi phí và bàn giao — hoặc để chúng tôi vận hành thay bạn.",
      },
    ],
  },

  testimonials: {
    label: "Khách hàng",
    title: "Những đội ngũ đã đồng hành",
    description:
      "Đánh giá minh họa — hãy thay bằng phản hồi khách hàng thật trước khi ra mắt.",
    items: [
      {
        quote:
          "Triển khai Workshop giúp chúng tôi có được tầm nhìn chưa từng có. Riêng việc phân tích thời gian dừng máy đã hoàn vốn cho dự án chỉ trong một quý.",
        name: "Nguyễn Minh",
        role: "Giám đốc vận hành",
        company: "Tập đoàn sản xuất, 1.200 nhân sự",
      },
      {
        quote:
          "Typing Master trở thành nền tảng được dùng nhiều nhất trong chương trình đào tạo. Học viên thực sự thi đua nhau tiến bộ.",
        name: "Trần Hà",
        role: "Trưởng bộ phận đào tạo",
        company: "Trường cao đẳng nghề",
      },
      {
        quote:
          "Họ cho ra nguyên mẫu AI chạy được trong ba tuần và hệ thống production trong ba tháng. Sự kỷ luật như vậy rất hiếm.",
        name: "Lê Quang",
        role: "CTO",
        company: "Nền tảng logistics",
      },
    ],
  },

  pricing: {
    label: "Hình thức hợp tác",
    title: "Các cách làm việc cùng nhau",
    description:
      "Điểm khởi đầu minh bạch. Mọi hợp tác đều được xác định phạm vi sau buổi khảo sát.",
    note: "Tất cả mức giá là con số minh họa bằng VND, chưa bao gồm VAT. Giấy phép sản phẩm được báo giá riêng.",
    tiers: [
      {
        name: "Sprint khảo sát",
        price: "40M₫",
        period: "mỗi sprint 2 tuần",
        description:
          "Kiểm chứng ý tưởng, giảm thiểu rủi ro trước khi xây dựng.",
        features: [
          "Khảo sát các bên liên quan & quy trình",
          "Đánh giá khả thi về kỹ thuật",
          "Nguyên mẫu có thể nhấp",
          "Tài liệu kiến trúc giải pháp",
          "Ước lượng chi phí & tiến độ",
        ],
        cta: "Bắt đầu một sprint",
        featured: false,
      },
      {
        name: "Đội ngũ chuyên trách",
        price: "90M₫",
        period: "mỗi tháng",
        description: "Một đội đa chức năng bàn giao sản phẩm mỗi hai tuần.",
        features: [
          "Product manager, designer, kỹ sư",
          "Có chuyên gia AI/ML trong đội",
          "Nhịp phát hành hai tuần một lần",
          "Thiết lập CI/CD, observability và on-call",
          "Đánh giá lộ trình & KPI hàng tháng",
        ],
        cta: "Xây dựng cùng đội ngũ",
        featured: true,
      },
      {
        name: "Doanh nghiệp",
        price: "Theo yêu cầu",
        period: "hợp đồng theo năm",
        description: "Bàn giao đa đội ngũ, tuân thủ và vận hành nền tảng.",
        features: [
          "Nhiều luồng công việc song song",
          "Triển khai tại chỗ hoặc private cloud",
          "Hỗ trợ theo SLA & leo thang 24/7",
          "Đánh giá bảo mật & hỗ trợ tuân thủ",
          "Báo cáo ở cấp lãnh đạo",
        ],
        cta: "Liên hệ kinh doanh",
        featured: false,
      },
    ],
  },

  faq: {
    label: "Câu hỏi thường gặp",
    title: "Những câu hỏi chúng tôi nhận nhiều nhất",
    description:
      "Không tìm thấy điều bạn cần? Gửi tin nhắn và chúng tôi sẽ trả lời trong một ngày làm việc.",
    items: [
      {
        q: "Bao lâu thì có thể bắt đầu?",
        a: "Sprint khảo sát thường bắt đầu trong vòng một đến hai tuần sau khi ký kết. Đội ngũ chuyên trách phụ thuộc vào năng lực hiện có — chúng tôi sẽ nói thẳng ngay ở cuộc gọi đầu tiên.",
      },
      {
        q: "Các bạn có làm việc cùng đội kỹ thuật sẵn có không?",
        a: "Có. Nhiều dự án được triển khai theo hướng nhúng: chúng tôi tham gia standup, tuân theo quy trình của bạn và để lại tài liệu cùng đào tạo thay vì một hộp đen.",
      },
      {
        q: "Workshop có tích hợp được với ERP của chúng tôi không?",
        a: "Workshop kết nối với các nền tảng ERP và MES phổ biến qua REST, hàng đợi thông điệp và OPC-UA/MQTT cho thiết bị nhà xưởng. Bộ kết nối tùy chỉnh nằm trong phạm vi triển khai tiêu chuẩn.",
      },
      {
        q: "Người học dùng Typing Master như thế nào?",
        a: "Ứng dụng chạy hoàn toàn trên trình duyệt — không cần cài đặt và vẫn hoạt động offline. Tiến độ được lưu ngay trên thiết bị, việc đăng nhập là tuỳ chọn để đồng bộ giữa các thiết bị. Hai chặng đầu và bốn bài đọc đầu tiên miễn phí.",
      },
      {
        q: "Ai sở hữu mã nguồn và mô hình?",
        a: "Là bạn. Phần phát triển theo yêu cầu được bàn giao trên repository và tài khoản cloud của bạn, quyền sở hữu trí tuệ chuyển giao khi thanh toán đợt cuối, trừ khi có thỏa thuận khác bằng văn bản.",
      },
      {
        q: "Đội ngũ của các bạn ở đâu?",
        a: "Đội kỹ thuật của chúng tôi đặt tại Việt Nam và làm việc trong khung giờ trùng với bạn. Cả tiếng Việt và tiếng Anh đều là ngôn ngữ làm việc.",
      },
    ],
  },

  cta: {
    label: "Cùng trò chuyện",
    title: "Cho chúng tôi biết bạn đang muốn xây dựng điều gì",
    description:
      "Chia sẻ vài thông tin, chúng tôi sẽ phản hồi với các bước tiếp theo, ước lượng sơ bộ và ý kiến thẳng thắn liệu chúng tôi có phù hợp hay không.",
    form: {
      name: "Họ và tên",
      namePlaceholder: "Nguyễn Văn A",
      email: "Email công việc",
      emailPlaceholder: "ban@congty.com",
      company: "Công ty",
      companyPlaceholder: "Tên công ty",
      phone: "Số điện thoại",
      phonePlaceholder: "+84 ...",
      interest: "Tôi quan tâm đến",
      interestOptions: [
        "Sản phẩm AI theo yêu cầu",
        "Typing Master",
        "Workshop",
        "Word Rain",
        "Tư vấn / đánh giá AI",
        "Nội dung khác",
      ],
      message: "Bạn đang xây dựng điều gì?",
      messagePlaceholder: "Vài câu về bài toán, tiến độ và đội ngũ của bạn.",
      submit: "Gửi tin nhắn",
      sending: "Đang gửi…",
      success:
        "Tin nhắn đã sẵn sàng. Chúng tôi đang mở ứng dụng email để hoàn tất việc gửi.",
      error: "Đã có lỗi xảy ra. Vui lòng gửi email trực tiếp tới",
      required: "Trường này là bắt buộc",
      validEmail: "Vui lòng nhập địa chỉ email hợp lệ",
    },
    info: {
      emailLabel: "Email",
      email: "hello@aitechx.vn",
      phoneLabel: "Điện thoại",
      phone: "+84 (0) 24 0000 0000",
      addressLabel: "Văn phòng",
      address: "Hà Nội, Việt Nam",
      responseLabel: "Thời gian phản hồi",
      response: "Trong vòng 1 ngày làm việc",
    },
  },

  footer: {
    tagline:
      "Kỹ nghệ phần mềm lấy AI làm trọng tâm, dành cho những đội ngũ cần sản phẩm chạy thật thay vì nguyên mẫu nằm trong ngăn kéo.",
    productsTitle: "Sản phẩm",
    companyTitle: "Công ty",
    resourcesTitle: "Tài nguyên",
    legalTitle: "Pháp lý",
    about: "Về chúng tôi",
    careers: "Tuyển dụng",
    contact: "Liên hệ",
    blog: "Blog",
    docs: "Tài liệu",
    support: "Hỗ trợ",
    status: "Tình trạng hệ thống",
    privacy: "Chính sách bảo mật",
    terms: "Điều khoản dịch vụ",
    security: "Bảo mật",
    rights: "AiTechX. Bảo lưu mọi quyền.",
    backToTop: "Lên đầu trang",
  },

  about: {
    meta: {
      title: "Về AiTechX",
      description:
        "Chúng tôi là công ty kỹ nghệ phần mềm lấy AI làm trọng tâm tại Việt Nam, xây dựng sản phẩm thông minh cho giáo dục và sản xuất.",
    },
    label: "Về chúng tôi",
    title: "Những kỹ sư quan tâm đến việc nó có thực sự chạy được không",
    lead: "AiTechX bắt đầu từ một nỗi bực mình đơn giản: quá nhiều dự án AI không bao giờ tới được môi trường production. Chúng tôi xây dựng những hệ thống làm được điều đó — đo lường được, dễ bảo trì và ổn định một cách nhàm chán.",
    storyTitle: "Câu chuyện của chúng tôi",
    story: [
      "Chúng tôi khởi đầu là một nhóm nhỏ kỹ sư bàn giao phần mềm production cho khách hàng trong ngành sản xuất và giáo dục. Những bài toán đều rất thực tế — một nhà máy mất hàng giờ vì dừng máy ngoài kế hoạch, một trung tâm đào tạo không có cách đo tiến bộ khách quan.",
      "Những bài toán đó dần trở thành sản phẩm của chúng tôi. Workshop ra đời ngay tại nhà xưởng, được tinh chỉnh cùng người vận hành và kế hoạch cho đến khi dữ liệu thực sự đáng tin. Typing Master ra đời trong lớp học, nơi sự hấp dẫn quan trọng không kém độ chính xác.",
      "Hôm nay chúng tôi kết hợp kinh nghiệm vận hành đó với nghiên cứu AI ứng dụng. Chúng tôi cố ý giữ đội ngũ nhỏ, nhiều kinh nghiệm và trực tiếp làm: người thiết kế hệ thống cho bạn cũng là người xây dựng và vận hành nó.",
    ],
    valuesTitle: "Chúng tôi tin vào điều gì",
    values: [
      {
        title: "Phải chạy thật, nếu không thì chưa xong",
        description:
          "Một mô hình nằm trong notebook chưa phải là sản phẩm. Chúng tôi đo mình bằng những gì chạy ổn định với người dùng và dữ liệu thật.",
      },
      {
        title: "Con số thẳng thắn, câu trả lời trung thực",
        description:
          "Nếu một hướng tiếp cận AI không mang lại hiệu quả, chúng tôi nói rõ và đề xuất giải pháp đơn giản hơn. Niềm tin tích lũy nhanh hơn doanh thu.",
      },
      {
        title: "Tay nghề thay vì từ khóa thời thượng",
        description:
          "Kiến trúc nhàm chán nhưng được kiểm thử kỹ luôn thắng một stack hợp mốt. Chúng tôi chọn công nghệ cho cả thập kỷ, không phải cho buổi demo.",
      },
      {
        title: "Để lại đội ngũ mạnh hơn",
        description:
          "Tài liệu, làm việc cặp và đào tạo đều là sản phẩm bàn giao. Chúng tôi trao kiến thức, không tạo sự phụ thuộc.",
      },
    ],
    expertiseTitle: "Chúng tôi mạnh nhất ở đâu",
    expertiseLabel: "Chuyên môn",
    stackTitle: "Công nghệ chúng tôi dùng",
    stackLabel: "Công nghệ",
    stackGroups: [
      {
        name: "Frontend",
        items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      },
      {
        name: "Backend",
        items: ["Node.js", "Python", "FastAPI", "PostgreSQL"],
      },
      { name: "AI / ML", items: ["PyTorch", "OpenCV", "LangChain", "MLflow"] },
      {
        name: "Nền tảng",
        items: ["Docker", "Kubernetes", "Kafka", "Terraform"],
      },
    ],
    teamTitle: "Ban lãnh đạo",
    teamLabel: "Đội ngũ",
    teamNote: "Hồ sơ minh họa — hãy thay bằng tên, chức danh và ảnh thật.",
    team: [
      { name: "Nguyễn Văn A", role: "Đồng sáng lập & CEO" },
      { name: "Trần Thị B", role: "Đồng sáng lập & CTO" },
      { name: "Lê Văn C", role: "Trưởng bộ phận AI" },
      { name: "Phạm Thị D", role: "Trưởng bộ phận triển khai" },
    ],
  },

  careers: {
    meta: {
      title: "Tuyển dụng tại AiTechX",
      description:
        "Tham gia đội ngũ nhỏ, nhiều kinh nghiệm đang xây dựng sản phẩm AI cho giáo dục và sản xuất. Vị trí đang mở trong kỹ thuật, thiết kế và triển khai.",
    },
    label: "Tuyển dụng",
    title: "Xây dựng những thứ người khác dựa vào",
    lead: "Chúng tôi là đội ngũ nhỏ với phạm vi công việc rộng. Bạn sẽ làm chủ bài toán từ đầu đến cuối, thấy công việc của mình được dùng mỗi ngày và trưởng thành nhanh hơn ở một tổ chức lớn.",
    openRolesTitle: "Vị trí đang tuyển",
    openRolesLabel: "Vị trí",
    openRolesCount: "vị trí",
    noRoles:
      "Hiện chưa có vị trí nào đang mở — hãy gửi ứng tuyển tự do và chúng tôi sẽ ghi nhớ bạn.",
    benefitsTitle: "Vì sao nên tham gia",
    benefits: [
      {
        title: "Mặc định là cấp cao",
        description: "Đội nhỏ, tin cậy cao, quy trình tối giản.",
      },
      {
        title: "Làm chủ thực sự",
        description:
          "Bạn đưa sản phẩm lên production và thấy tác động trong vài ngày, không phải vài quý.",
      },
      {
        title: "Ngân sách học tập",
        description: "Ngân sách hàng năm cho khóa học, sách và hội thảo.",
      },
      {
        title: "Giờ làm linh hoạt",
        description:
          "Làm việc kết hợp, có khung giờ chung và tôn trọng thời gian tập trung.",
      },
      {
        title: "Trang bị hiện đại",
        description: "Thiết bị cao cấp và công cụ bạn thực sự muốn dùng.",
      },
      {
        title: "Chăm sóc sức khỏe",
        description: "Bảo hiểm sức khỏe cho bạn và hỗ trợ cho gia đình.",
      },
    ],
    processTitle: "Quy trình tuyển dụng",
    process: [
      {
        step: "01",
        title: "Trao đổi ban đầu",
        description: "30 phút để hiểu mục tiêu của bạn và giải đáp thắc mắc.",
      },
      {
        step: "02",
        title: "Trao đổi chuyên môn",
        description:
          "Thảo luận thực tế về những hệ thống bạn từng xây và các đánh đổi.",
      },
      {
        step: "03",
        title: "Bài tập có trả phí",
        description:
          "Một bài ngắn, thực tế — gói gọn trong vài giờ và được trả thù lao.",
      },
      {
        step: "04",
        title: "Đề nghị",
        description:
          "Quyết định trong vòng một tuần, kèm phản hồi rõ ràng trong mọi trường hợp.",
      },
    ],
    roles: [
      {
        title: "Kỹ sư Frontend cấp cao",
        team: "Kỹ thuật sản phẩm",
        type: "Toàn thời gian",
        location: "Hà Nội / Kết hợp",
      },
      {
        title: "Kỹ sư ML (Thị giác máy tính)",
        team: "AI Lab",
        type: "Toàn thời gian",
        location: "Hà Nội / Kết hợp",
      },
      {
        title: "Product Designer",
        team: "Thiết kế",
        type: "Toàn thời gian",
        location: "Hà Nội / Kết hợp",
      },
      {
        title: "Chuyên gia tư vấn giải pháp sản xuất",
        team: "Triển khai",
        type: "Toàn thời gian",
        location: "Hà Nội / Tại văn phòng",
      },
    ],
    applyCta: "Ứng tuyển ngay",
    speculativeCta: "Gửi ứng tuyển tự do",
  },

  productPages: {
    backToProducts: "Tất cả sản phẩm",
    overview: "Tổng quan",
    capabilities: "Năng lực",
    outcomes: "Kết quả",
    useCases: "Trường hợp sử dụng",
    faqTitle: "Câu hỏi thường gặp",
    ctaTitle: "Sẵn sàng xem sản phẩm vận hành?",
    typingMaster: {
      meta: {
        title: "Typing Master — luyện gõ mười ngón trên trình duyệt",
        description:
          "Khoá học gõ mười ngón có lộ trình, thư viện đọc có hướng dẫn và phân tích tiến độ trung thực — chạy hoàn toàn trên trình duyệt, offline và không cần tài khoản.",
      },
      eyebrow: "Sản phẩm · Giáo dục",
      title: "Typing Master",
      tagline: "Học gõ mười ngón, từng phím một.",
      description:
        "Ứng dụng luyện gõ chạy trên trình duyệt, theo đúng lộ trình của TypingMaster cổ điển: bắt đầu ở hàng phím cơ sở, thêm từng cặp phím một, rồi chuyển sang từ thật, câu và luyện tốc độ.",
      highlights: [
        { value: "24", label: "Bài học trong 6 chặng" },
        { value: "20", label: "Bài đọc có hướng dẫn" },
        { value: "3", label: "Chế độ luyện & trò chơi" },
        { value: "Offline", label: "Chạy trên trình duyệt" },
      ],
      overviewTitle: "Lộ trình tự mở khoá",
      overview:
        "Typing Master giữ kỷ luật của các bài luyện desktop nguyên bản — chính xác trước, từng phím một — và đưa lên trình duyệt. Bàn phím hướng dẫn trực tiếp làm nổi phím kế tiếp và chỉ rõ ngón cần dùng, còn bài luyện chế độ nghiêm ngặt không cho đi tiếp cho đến khi bạn gõ đúng phím. Các bài học mở lần lượt: bài sau chỉ mở khi bạn đạt ngưỡng độ chính xác, nên tốc độ không bao giờ vượt mặt độ chính xác.",
      capabilities: [
        {
          title: "Khoá học sáu chặng",
          description:
            "24 bài học từ hàng phím cơ sở đến hàng trên, hàng dưới, số và ký hiệu, văn bản thật, rồi cuối cùng là tốc độ và sức bền.",
        },
        {
          title: "Thư viện đọc có hướng dẫn",
          description:
            "20 đoạn mở đầu từ các tác phẩm thiếu nhi thuộc phạm vi công cộng, ở chế độ flow, chia theo bậc bốn bài để xây tốc độ thực tế.",
        },
        {
          title: "Bàn phím hướng dẫn trực tiếp",
          description:
            "Phím kế tiếp được làm nổi, phím shift cần dùng sáng lên ở phía đối diện, và mỗi phím được tô màu theo ngón phụ trách.",
        },
        {
          title: "Chế độ nghiêm ngặt và flow",
          description:
            "Bài luyện nghiêm ngặt chặn phím sai để đặt độ chính xác lên trước; chế độ flow đánh dấu lỗi và cho gõ tiếp trên câu thật.",
        },
        {
          title: "Luyện tập và trò chơi",
          description:
            "Gõ văn bản của riêng bạn, chạy bài sprint 60 giây, hoặc chơi Word rain — tất cả đều đổ vào cùng một bộ thống kê.",
        },
        {
          title: "Bảng tiến độ",
          description:
            "Xu hướng tốc độ và độ chính xác, biểu đồ luyện tập 14 ngày, thanh tiến độ từng bài, chuỗi ngày và điểm cao nhất — không cần thư viện vẽ biểu đồ.",
        },
      ],
      outcomesTitle: "Người học nhận được gì",
      outcomes: [
        "Gõ mười ngón được xây từ hàng phím cơ sở lên, từng cặp phím một",
        "Tiến độ mở theo độ chính xác, nên người học chậm mà kỹ không bị bỏ lại",
        "Xếp hạng sao và thành tích cá nhân giúp tiến bộ thấy được",
        "Bức tranh rõ ràng về xu hướng tốc độ và độ chính xác theo thời gian",
      ],
      useCasesTitle: "Phù hợp với",
      useCases: [
        {
          title: "Lớp học",
          description:
            "Khoá học tự nhịp mà học sinh bắt đầu trong vài giây, với tiến độ các em tự thấy được.",
        },
        {
          title: "Người tự học",
          description:
            "Lộ trình có cấu trúc thay vì các bài kiểm tra gõ ngẫu nhiên — không cần cài đặt, không cần tài khoản.",
        },
        {
          title: "Trung tâm đào tạo",
          description:
            "Một nền tảng gõ mười ngón nhất quán trước khi học viên chuyển sang phần mềm chuyên ngành.",
        },
        {
          title: "Đội ngũ gõ cả ngày",
          description:
            "Luyện ngắn mỗi ngày, thể hiện thành mức tăng tốc độ và độ chính xác đo lường được.",
        },
      ],
      faq: [
        {
          q: "Có cần cài đặt gì không?",
          a: "Không. Typing Master chạy hoàn toàn trên trình duyệt và hoạt động offline — tiến độ được lưu ngay trên thiết bị.",
        },
        {
          q: "Người học có cần tài khoản không?",
          a: "Không. Khoá học, phần đọc có hướng dẫn, luyện tập và trò chơi đều dùng được khi chưa có tài khoản. Đăng nhập là tuỳ chọn, thêm đồng bộ đám mây giữa các thiết bị.",
        },
        {
          q: "Có miễn phí không?",
          a: "Hai chặng đầu (bài 1–9) và bốn bài đọc đầu tiên miễn phí. Gói thành viên tuỳ chọn sẽ mở phần bài học và bài đọc còn lại.",
        },
      ],
      ctaDescription:
        "Thử khoá học ngay trên trình duyệt, hoặc trao đổi với chúng tôi để triển khai Typing Master cho cả lớp, trung tâm hay đội ngũ.",
    },
    workshop: {
      meta: {
        title: "Workshop — quản trị sản xuất cho doanh nghiệp",
        description:
          "Quản trị sản xuất quy mô lớn: hoạch định BOM và MRP, thực thi nhà xưởng, phân tích OEE và dự báo bằng AI.",
      },
      eyebrow: "Sản phẩm · Sản xuất",
      title: "Workshop",
      tagline: "Một hệ thống từ đơn hàng đến pallet xuất kho.",
      description:
        "Workshop kết nối hoạch định, nhà xưởng và báo cáo quản trị thành một nguồn dữ liệu duy nhất — rồi phủ AI lên trên để dự đoán điều sắp xảy ra thay vì giải thích điều đã sai.",
      highlights: [
        { value: "1 nguồn", label: "Dữ liệu sản xuất duy nhất" },
        { value: "+18%", label: "Mức tăng OEE điển hình" },
        { value: "-32%", label: "Công sức hoạch định" },
        { value: "Trực tiếp", label: "Tầm nhìn nhà xưởng" },
      ],
      overviewTitle: "Vì sao nhà sản xuất chọn Workshop",
      overview:
        "Bảng tính và các công cụ rời rạc che mất điểm nghẽn thật. Workshop mô hình hóa công đoạn, năng lực và dòng vật tư, ghi nhận sự kiện thực tế tại nhà xưởng và liên tục đối chiếu kế hoạch với thực tế — để người lập kế hoạch và người quản lý cùng nhìn vào một con số.",
      capabilities: [
        {
          title: "Hoạch định BOM & MRP",
          description:
            "Định mức nguyên vật liệu đa cấp, hoạch định nhu cầu vật tư và cảnh báo thiếu hụt trước khi dừng chuyền.",
        },
        {
          title: "Điều độ sản xuất",
          description:
            "Điều độ theo năng lực hữu hạn trên các trung tâm gia công, điều chỉnh bằng Gantt kéo thả.",
        },
        {
          title: "Thực thi nhà xưởng",
          description:
            "Trạm vận hành, quét barcode/QR, hướng dẫn công việc và leo thang Andon kỹ thuật số.",
        },
        {
          title: "Phân tích OEE & thời gian dừng",
          description:
            "Theo dõi khả dụng, hiệu suất và chất lượng theo chuyền, ca và máy, kèm mã lý do.",
        },
        {
          title: "Quản lý chất lượng",
          description:
            "Kế hoạch kiểm tra, quy trình xử lý hàng lỗi, hành động khắc phục và truy xuất theo lô.",
        },
        {
          title: "Dự báo bằng AI",
          description:
            "Dự báo nhu cầu và tiêu thụ vật tư kèm khoảng tin cậy, đưa thẳng vào hoạch định.",
        },
        {
          title: "Tồn kho & kho bãi",
          description:
            "Tồn kho đa vị trí, theo dõi sản phẩm dở dang, kiểm kê luân phiên và gợi ý đặt hàng tự động.",
        },
        {
          title: "Giá thành & tích hợp",
          description:
            "So sánh giá thành định mức và thực tế, tích hợp ERP/MES qua REST, hàng đợi, OPC-UA và MQTT.",
        },
      ],
      outcomesTitle: "Kết quả điển hình",
      outcomes: [
        "Giảm dừng máy ngoài kế hoạch khi nguyên nhân trở nên rõ ràng và xử lý được",
        "Chu kỳ hoạch định ngắn hơn nhờ dữ liệu năng lực và vật tư trực tiếp",
        "Giao hàng đúng hạn tốt hơn nhờ cam kết thực tế và cảnh báo sớm",
        "Khả năng truy xuất có thể kiểm toán cho điều tra chất lượng và yêu cầu khách hàng",
      ],
      useCasesTitle: "Phù hợp với",
      useCases: [
        {
          title: "Sản xuất rời rạc",
          description:
            "Dây chuyền lắp ráp và sản xuất linh kiện với BOM đa cấp.",
        },
        {
          title: "Thực phẩm & đồ uống",
          description:
            "Truy xuất theo lô, kiểm soát hạn dùng và hồ sơ chất lượng nghiêm ngặt.",
        },
        {
          title: "Điện tử & EMS",
          description:
            "Công đoạn đa dạng, thiếu hụt linh kiện và truy xuất theo số sê-ri.",
        },
        {
          title: "Nội thất & vật liệu xây dựng",
          description:
            "Kế hoạch cắt, tối ưu hiệu suất vật liệu và chuỗi công đoạn dài.",
        },
      ],
      faq: [
        {
          q: "Một lần triển khai thường mất bao lâu?",
          a: "Triển khai một nhà máy thường đi vào hoạt động trong 8–12 tuần, bắt đầu từ hoạch định và theo dõi nhà xưởng trước khi mở rộng sang phân tích.",
        },
        {
          q: "Có thể chạy tại chỗ (on-premise) không?",
          a: "Có. Workshop được cung cấp dưới dạng cloud, private cloud hoặc tại chỗ bằng Docker/Kubernetes, tùy chính sách dữ liệu của bạn.",
        },
        {
          q: "Nhân viên vận hành có cần đào tạo nhiều không?",
          a: "Trạm nhà xưởng được thiết kế để thao tác tối thiểu — chỉ cần quét mã và vài lần chạm. Hầu hết nhân viên làm quen trong một ca.",
        },
      ],
      ctaDescription:
        "Đặt một buổi khảo sát để vẽ lại dòng chảy sản xuất của bạn, hoặc yêu cầu demo với chính dữ liệu quy trình của bạn.",
    },
    wordRain: {
      meta: {
        title: "Word Rain — trò chơi luyện gõ mười ngón trên trình duyệt",
        description:
          "Từ rơi như mưa. Gõ vỡ chúng trước khi chạm vạch đỏ qua mười hai chặng, nơi sao được trao cho độ chính xác và không bao giờ cho tốc độ.",
      },
      eyebrow: "Sản phẩm · Trò chơi",
      title: "Word Rain",
      tagline: "Gõ những từ đang rơi trước khi chạm vạch.",
      description:
        "Trò chơi luyện gõ mười ngón đặt độ chính xác lên trước tốc độ: từ rơi như mưa và bạn gõ vỡ chúng trước khi chạm vạch đỏ, trong khi mười hai chặng đưa bạn từ hàng phím cơ sở đến tốc độ thật sự.",
      highlights: [
        { value: "12", label: "Chặng trong 4 chương" },
        { value: "17", label: "Thành tích để mở khoá" },
        { value: "3×", label: "Hệ số chuỗi cao nhất" },
        { value: "Không cài", label: "Chạy trên trình duyệt" },
      ],
      overviewTitle: "Chính xác trước, tốc độ sau",
      overview:
        "Word Rain lấy kỷ luật của bài luyện gõ mười ngón và biến thành trò chơi. Lần gõ đầu tiên sẽ khoá vào từ thấp nhất bắt đầu bằng ký tự đó — từ gần vạch đỏ nhất — và khi một từ đã bị khoá, phím sai bị từ chối, nên chuỗi thưởng cho việc gõ sạch chứ không phải gõ cuống. Backspace thoát khỏi từ đang khoá mà không bị phạt. Mỗi chặng mở ngay khi chặng trước được hoàn thành, không cần đạt ngưỡng điểm nào, nhưng sao chỉ xếp theo độ chính xác: một sao để hoàn thành, hai sao ở 90%, ba sao ở 96% và không để từ nào lọt qua. Các chặng đầu cho bạn năm mạng; các chương tốc độ giảm còn ba.",
      capabilities: [
        {
          title: "Mười hai chặng trong bốn chương",
          description:
            "Nền tảng, Mở rộng, Ký tự và Tốc độ đưa bạn từ hàng phím cơ sở qua hàng trên, hàng dưới, số và chữ hoa, rồi đến từ dài ở tốc độ tối đa.",
        },
        {
          title: "Kho từ bám theo phím đã học",
          description:
            "Mỗi chặng lấy từ từ kho được dựng riêng cho những phím bạn đã học, nên từ mới chỉ đến sau khi ngón tay đã quen.",
        },
        {
          title: "Khoá mục tiêu và phím nghiêm ngặt",
          description:
            "Lần gõ đầu khoá từ khớp thấp nhất; phím sai bị từ chối và đặt lại chuỗi, còn Backspace thoát ra mà không bị phạt.",
        },
        {
          title: "Hệ số chuỗi",
          description:
            "Mỗi từ bị phá làm tăng hệ số, tối đa 3× khi đạt chuỗi năm mươi từ — lượt gõ sạch bỏ xa lượt gõ vội.",
        },
        {
          title: "Sao xếp theo độ chính xác",
          description:
            "Một sao để hoàn thành, hai sao ở 90% độ chính xác, ba sao ở 96% và không từ nào lọt qua. Tốc độ không bao giờ mua được sao.",
        },
        {
          title: "Thành tích và tiến độ",
          description:
            "Mười bảy thành tích và hồ sơ tiến độ lưu trên thiết bị theo dõi sao, điểm cao nhất và các mốc cá nhân giữa các phiên.",
        },
      ],
      outcomesTitle: "Người chơi nhận được gì",
      outcomes: [
        "Lộ trình từ hàng cơ sở đến tốc độ, không bao giờ thưởng cho việc gõ ẩu",
        "Chuỗi và hệ số khiến việc gõ chính xác trở nên thú vị",
        "Sao và thành tích giúp tiến bộ thấy được ngay",
        "Vào chơi bằng một cú nhấp — không tài khoản, không cần cài đặt",
      ],
      useCasesTitle: "Phù hợp với",
      useCases: [
        {
          title: "Khởi động",
          description:
            "Bài luyện chính xác hai phút trước khi vào việc, vào giờ học hay buổi đào tạo.",
        },
        {
          title: "Lớp học",
          description:
            "Trò chơi học sinh thực sự muốn chơi lại, nơi bảng điểm thưởng cho sự chính xác thay vì sự cuống.",
        },
        {
          title: "Luyện giữa các bài học",
          description:
            "Bạn đồng hành vui nhộn cho khoá luyện gõ có cấu trúc, củng cố đúng những phím vừa học.",
        },
        {
          title: "Người mê typing-sport",
          description:
            "Lượt chơi ngắn, chơi lại được, với sao, chuỗi và thành tích cá nhân đáng để theo đuổi.",
        },
      ],
      faq: [
        {
          q: "Có cần cài đặt gì không?",
          a: "Không. Word Rain là ứng dụng web tĩnh — chạy trên trình duyệt, không backend, không tài khoản, không cần thiết lập.",
        },
        {
          q: "Có phải là Typing Master không?",
          a: "Không. Word Rain là trò chơi arcade độc lập, còn Typing Master là khoá học có cấu trúc. Hai sản phẩm chỉ chung một lĩnh vực, không chung điều gì khác.",
        },
        {
          q: "Điều gì xảy ra khi một từ chạm vạch?",
          a: "Nó nổ và mất một mạng — năm mạng ở các chặng đầu, ba mạng ở các chương tốc độ. Mất hết là kết thúc lượt chơi.",
        },
      ],
      ctaDescription:
        "Word Rain miễn phí — không tài khoản, không tải, không cần cài đặt. Mở wordrain.aitechx.vn trên trình duyệt và vào chơi ngay.",
    },
  },
};
