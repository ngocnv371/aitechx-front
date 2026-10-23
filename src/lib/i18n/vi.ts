import type { Dictionary } from "./types";

export const vi: Dictionary = {
  meta: {
    title: "AiTechX — Công ty phần mềm lấy AI làm trọng tâm",
    description:
      "AiTechX xây dựng phần mềm ứng dụng AI cho doanh nghiệp: hệ thống AI theo yêu cầu, nền tảng luyện gõ Typing Master, giải pháp quản trị sản xuất Workshop, nền tảng trắc nghiệm lớp học Easy Quiz, Easy Slides — công cụ miễn phí giúp thầy cô tạo trò chơi đố vui PowerPoint — và ARC: Ascension, trò chơi thẻ bài dị thể cho Android và Windows.",
    keywords: [
      "công ty phần mềm AI",
      "phát triển AI Việt Nam",
      "phần mềm quản lý sản xuất",
      "luyện gõ bàn phím",
      "thị giác máy tính",
      "tích hợp LLM",
      "tạo trò chơi PowerPoint",
      "trò chơi thẻ bài",
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
    createFree: "Tạo trò chơi miễn phí",
    joinBeta: "Tham gia bản beta",
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
    title: "Năm sản phẩm. Một sự cầu toàn.",
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
          "Luyện tập tự do và bài sprint 60 giây",
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
        id: "easy-quiz",
        badge: "Giáo dục",
        name: "Easy Quiz",
        tagline: "Trắc nghiệm học sinh thích chơi, giáo viên dễ tạo.",
        description:
          "Nền tảng trắc nghiệm hai chiều: học sinh duyệt theo chủ đề, chơi ngay với tư cách khách và leo bảng xếp hạng, còn giáo viên tự soạn câu hỏi — hoặc để AI Assist biến một dòng mô tả thành bộ câu hỏi sẵn sàng chỉnh sửa.",
        features: [
          "Danh mục trắc nghiệm theo chủ đề, chơi ngay không cần tài khoản",
          "Bảng xếp hạng riêng cho từng bài, chơi theo kiểu thi",
          "Chấm điểm phía máy chủ — đáp án không bao giờ rời khỏi cơ sở dữ liệu",
          "Giáo viên tự soạn câu hỏi trắc nghiệm kèm lời giải",
          "AI Assist soạn trọn bộ câu hỏi từ một mô tả ngắn",
        ],
      },
      {
        id: "easy-slides",
        badge: "Giáo dục",
        name: "Easy Slides",
        tagline: "Nhập câu hỏi, nhận ngay trò chơi PowerPoint sinh động.",
        description:
          "Công cụ miễn phí cho thầy cô: nhập câu hỏi, chọn giao diện và tải về trò chơi đố vui dạng .pptx, trình chiếu ngay trên PowerPoint không cần tiện ích. Chạy trên trình duyệt, không tải dữ liệu lên, không cần tài khoản.",
        features: [
          "15 mẫu giao diện, từ Bảng đen đến Đáy biển",
          "Bấm để lật đáp án hoặc chọn đáp án, kèm pháo giấy",
          "30 hiệu ứng xuất hiện, 11 nhấn mạnh, 37 kiểu chuyển trang",
          "Hơn 40 âm thanh và thanh đếm ngược tuỳ chọn",
          "Trình chiếu thử ngay trước khi tải về",
        ],
      },
      {
        id: "arc-ascension",
        badge: "Trò chơi",
        name: "ARC: Ascension",
        tagline: "Phong ấn dị thể vào thẻ bài. Leo lên Tháp Thăng Thiên.",
        description:
          "Trò chơi thẻ bài màn hình dọc cho Android và Windows: mở hộp bí ẩn, rèn những thẻ rút được, xếp bộ bài năm thẻ rồi chiến đấu qua chiến dịch và ngọn tháp 100 tầng. Chơi hoàn toàn offline, không tài khoản, không mua bán trong game.",
        features: [
          "140 thẻ dị thể, mỗi thẻ có mô hình 3D sống động",
          "Hộp bí ẩn từ Đồng đến Lăng kính, công khai tỉ lệ rơi",
          "Cường hóa, dung hợp và tha hóa thẻ bài",
          "Chiến dịch ba chương và Tháp Thăng Thiên 100 tầng",
          "Trận đấu canh thời điểm, theo vòng tương khắc năm hệ",
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
        q: "Easy Slides có thực sự miễn phí không?",
        a: "Có. Easy Slides miễn phí và không cần tài khoản. Bài trình chiếu được tạo hoàn toàn trên trình duyệt, nên câu hỏi và hình ảnh của thầy cô không bao giờ bị tải lên mạng.",
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
        "Easy Quiz",
        "Easy Slides",
        "ARC: Ascension",
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
      phone: "+84 (0) 37456 6452",
      addressLabel: "Văn phòng",
      address: "Thành phố Hồ Chí Minh, Việt Nam",
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

  legal: {
    label: "Pháp lý",
    updatedLabel: "Cập nhật lần cuối",
    privacy: {
      meta: {
        title: "Chính sách bảo mật",
        description:
          "Cách AiTechX thu thập, sử dụng và bảo vệ dữ liệu cá nhân trên website và sản phẩm.",
      },
      title: "Chính sách bảo mật",
      lead: "Cách chúng tôi thu thập, sử dụng và bảo vệ dữ liệu cá nhân trên website và sản phẩm AiTechX.",
      updated: "Tháng 10 năm 2026",
      sections: [
        {
          heading: "Thông tin chúng tôi thu thập",
          body: "Chúng tôi chỉ thu thập những gì cần thiết để phản hồi yêu cầu và vận hành sản phẩm: thông tin bạn gửi qua biểu mẫu liên hệ (họ tên, email, công ty và nội dung) cùng một số dữ liệu kỹ thuật cơ bản như trình duyệt và các trang bạn truy cập.",
        },
        {
          heading: "Cách chúng tôi sử dụng",
          body: "Thông tin của bạn được dùng để phản hồi yêu cầu, cung cấp và cải thiện sản phẩm, và giữ cho dịch vụ an toàn. Chúng tôi không bao giờ bán dữ liệu cá nhân.",
        },
        {
          heading: "Lưu trữ cục bộ trong sản phẩm",
          body: "Typing Master và Easy Quiz lưu tiến độ và tuỳ chọn trong trình duyệt của bạn. Chơi với tư cách khách không cần tài khoản, và đăng nhập là tuỳ chọn để đồng bộ đám mây. Easy Slides tạo bài trình chiếu hoàn toàn trên trình duyệt — câu hỏi và hình ảnh bạn thêm vào không bao giờ bị tải lên. ARC: Ascension lưu tiến độ ngay trên thiết bị và không bao giờ kết nối internet.",
        },
        {
          heading: "Quyền của bạn",
          body: "Bạn có thể yêu cầu truy cập, chỉnh sửa hoặc xoá dữ liệu cá nhân bất kỳ lúc nào bằng cách gửi email tới hello@aitechx.vn.",
        },
      ],
    },
    terms: {
      meta: {
        title: "Điều khoản dịch vụ",
        description:
          "Các điều khoản điều chỉnh việc bạn sử dụng website và sản phẩm của AiTechX.",
      },
      title: "Điều khoản dịch vụ",
      lead: "Các điều khoản điều chỉnh việc bạn sử dụng website và sản phẩm của AiTechX.",
      updated: "Tháng 10 năm 2026",
      sections: [
        {
          heading: "Chấp nhận",
          body: "Khi sử dụng website hoặc sản phẩm của chúng tôi, bạn đồng ý với các điều khoản này. Nếu không đồng ý, vui lòng không sử dụng dịch vụ.",
        },
        {
          heading: "Sử dụng dịch vụ",
          body: "Bạn chỉ được dùng dịch vụ cho mục đích hợp pháp, và không được gây gián đoạn, dịch ngược hay truy cập trái phép vào hệ thống.",
        },
        {
          heading: "Tài khoản và nội dung",
          body: "Bạn chịu trách nhiệm về tính chính xác của nội dung mình gửi và việc bảo mật thông tin đăng nhập. Bạn giữ quyền sở hữu nội dung do mình tạo ra.",
        },
        {
          heading: "Giới hạn trách nhiệm",
          body: 'Dịch vụ được cung cấp "nguyên trạng". Trong phạm vi pháp luật cho phép, AiTechX không chịu trách nhiệm cho các tổn thất gián tiếp phát sinh từ việc sử dụng dịch vụ.',
        },
      ],
    },
    security: {
      meta: {
        title: "Bảo mật",
        description:
          "Cách AiTechX bảo vệ dữ liệu được giao phó cho website và sản phẩm.",
      },
      title: "Bảo mật",
      lead: "Cách chúng tôi bảo vệ dữ liệu được giao phó cho website và sản phẩm.",
      updated: "Tháng 10 năm 2026",
      sections: [
        {
          heading: "Cách tiếp cận",
          body: "Bảo mật được thiết kế ngay từ đầu: phân quyền tối thiểu, mã hoá khi truyền, rà soát mã nguồn và phụ thuộc, cùng kiểm thử tự động trước mỗi lần phát hành.",
        },
        {
          heading: "Bảo vệ dữ liệu",
          body: "Dữ liệu cá nhân chỉ được lưu trong thời gian cần thiết và được bảo vệ bằng mã hoá khi truyền và khi lưu trữ. Quyền truy cập giới hạn ở những thành viên thực sự cần.",
        },
        {
          heading: "Báo cáo lỗ hổng",
          body: "Nếu bạn cho rằng đã phát hiện lỗ hổng, vui lòng gửi email tới hello@aitechx.vn. Chúng tôi sẽ ghi nhận báo cáo và phối hợp cùng bạn để khắc phục.",
        },
        {
          heading: "Tính sẵn sàng",
          body: "Chúng tôi giám sát dịch vụ và diễn tập khôi phục để sự cố được phát hiện và xử lý nhanh chóng.",
        },
      ],
    },
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
            "Gõ văn bản của riêng bạn, chạy bài sprint 60 giây, hoặc luyện một bài đọc có hướng dẫn — tất cả đều đổ vào cùng một bộ thống kê.",
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
    easyQuiz: {
      meta: {
        title: "Easy Quiz — nền tảng trắc nghiệm hai chiều cho lớp học",
        description:
          "Học sinh chơi trắc nghiệm theo chủ đề ngay tức thì dưới dạng khách và leo bảng xếp hạng, còn giáo viên tự soạn câu hỏi hoặc để AI Assist phác thảo — chấm điểm phía máy chủ, không bao giờ trên trình duyệt.",
      },
      eyebrow: "Sản phẩm · Giáo dục",
      title: "Easy Quiz",
      tagline: "Chơi một bài trong vài giây, hoặc tạo một bài trong vài phút.",
      description:
        "Easy Quiz là nền tảng hai chiều: học sinh duyệt trắc nghiệm theo chủ đề, chơi ngay — có hoặc không có tài khoản — và leo bảng xếp hạng, còn giáo viên tự soạn câu hỏi hoặc đưa cho AI Assist một dòng mô tả rồi chỉnh sửa kết quả.",
      highlights: [
        { value: "Khách", label: "Chơi không cần tài khoản" },
        { value: "Máy chủ", label: "Chấm điểm — giấu đáp án" },
        { value: "AI", label: "Assist soạn câu hỏi" },
        { value: "Trực tiếp", label: "Bảng xếp hạng từng bài" },
      ],
      overviewTitle: "Một bảng xếp hạng công bằng bắt đầu từ máy chủ",
      overview:
        "Cách dễ nhất để làm một ứng dụng trắc nghiệm — gửi kèm câu hỏi cùng đáp án đúng rồi chấm ngay trên trình duyệt — khiến bảng xếp hạng trở nên vô nghĩa, vì bất kỳ ai cũng đọc được đáp án từ tab network. Easy Quiz chia việc theo cách khác: người chơi nhận bài của mình với phần đáp án đã bị loại bỏ, và mọi lượt làm bài đều được chấm bên trong cơ sở dữ liệu, nên điểm số được ghi nhận mới thực sự đáng tin. Khách cũng là người dùng đã đăng nhập thật, nên điểm có thể lên bảng xếp hạng ngay khi bài kết thúc, và việc lưu kết quả sau đó chỉ nâng cấp chính tài khoản đó thay vì bắt đầu lại từ đầu. Cách chơi theo kiểu thi — không gợi ý từng câu khi đang làm, rồi mở phần xem lại đầy đủ kèm lời giải sau khi bài được chấm.",
      capabilities: [
        {
          title: "Danh mục theo chủ đề",
          description:
            "Học sinh duyệt các bài đã công bố theo chủ đề và bắt đầu chỉ với một cú nhấp — không cần học qua một khoá học trước.",
        },
        {
          title: "Chơi với tư cách khách",
          description:
            "Đăng nhập ẩn danh cho khách một danh tính thật: đủ để lên bảng xếp hạng ngay, và giữ mọi kết quả nếu sau đó họ lưu tài khoản.",
        },
        {
          title: "Chấm điểm phía máy chủ",
          description:
            "Bài làm được chấm bên trong cơ sở dữ liệu và đáp án không bao giờ tới trình duyệt — đó là điều khiến điểm được ghi nhận đáng tin.",
        },
        {
          title: "Giáo viên tự soạn đề",
          description:
            "Giáo viên tạo bài theo từng câu, với các lựa chọn trắc nghiệm, lời giải và cấp độ; mỗi bộ được lưu trọn vẹn.",
        },
        {
          title: "AI Assist",
          description:
            "Nhập chủ đề, cấp độ, độ khó và số câu, nhận về bản nháp đã kiểm chứng sẵn sàng chỉnh sửa — tính theo tín dụng, có chế độ giả lập để luồng vẫn chạy khi không có khoá API.",
        },
        {
          title: "Bảng xếp hạng & xem lại",
          description:
            "Mỗi bài có bảng xếp hạng riêng, và mọi lượt đã chấm đều trả về phần xem lại từng câu kèm lời giải.",
        },
      ],
      outcomesTitle: "Mang lại điều gì",
      outcomes: [
        "Trắc nghiệm học sinh vào chơi trong vài giây, không cần cài đặt gì",
        "Điểm số đáng tin, vì việc chấm diễn ra trên máy chủ",
        "Kho câu hỏi để giáo viên phát triển mà không cần đội ngũ nội dung",
        "Luyện theo kiểu thi kèm phần xem lại thực sự sau mỗi lượt làm",
      ],
      useCasesTitle: "Phù hợp với",
      useCases: [
        {
          title: "Lớp học",
          description:
            "Giao một bài, để học sinh chơi trên thiết bị của mình và nhìn bảng xếp hạng đầy dần.",
        },
        {
          title: "Nhóm ôn tập",
          description:
            "Luyện theo chủ đề biến việc lặp lại thành trò chơi, với phần xem lại giải thích từng đáp án.",
        },
        {
          title: "Giáo viên thiếu thời gian",
          description:
            "AI Assist soạn bộ câu hỏi từ một mô tả ngắn, để giáo viên chỉnh sửa thay vì viết từ con số không.",
        },
        {
          title: "Đào tạo & hội nhập",
          description:
            "Kiểm tra mức độ hiểu bất kỳ chủ đề nào bằng bài trắc nghiệm mà người ta thực sự làm hết.",
        },
      ],
      faq: [
        {
          q: "Học sinh có cần tài khoản không?",
          a: "Không. Học sinh có thể chơi dưới dạng khách và vẫn xuất hiện trên bảng xếp hạng. Việc lưu kết quả chỉ nâng cấp chính tài khoản khách đó, nên những gì đã ghi nhận không bị mất.",
        },
        {
          q: "Người chơi có thấy đáp án đúng không?",
          a: "Không trong lúc đang trả lời. Bài được gửi đi với phần đáp án đã bị loại bỏ và mọi lượt làm đều được chấm bên trong cơ sở dữ liệu, nên đáp án đúng không bao giờ tới trình duyệt.",
        },
        {
          q: "AI Assist là gì?",
          a: "Nó biến một mô tả ngắn — chủ đề, cấp độ, độ khó và số câu — thành bản nháp bài trắc nghiệm để giáo viên chỉnh sửa. Nó tính theo tín dụng và có chế độ giả lập để luồng vẫn chạy khi không có khoá API.",
        },
        {
          q: "Tín dụng AI Assist được xử lý thế nào?",
          a: "Mỗi lần tạo bài sẽ trừ vào số tín dụng của giáo viên, do quản trị viên cấp; hiện chưa có luồng mua.",
        },
      ],
      ctaDescription:
        "Thử Easy Quiz ngay trên trình duyệt với tư cách khách, hoặc liên hệ để dùng trong lớp học, nhà trường hay chương trình đào tạo của bạn.",
    },
    easySlides: {
      meta: {
        title: "Easy Slides — tạo trò chơi đố vui PowerPoint cho học sinh",
        description:
          "Công cụ miễn phí giúp thầy cô tạo trò chơi đố vui PowerPoint trong vài phút: nhập câu hỏi, chọn giao diện, tải về file .pptx có hiệu ứng, âm thanh và pháo giấy. Không cần đăng ký.",
        keywords: [
          "tạo trò chơi powerpoint",
          "trò chơi đố vui powerpoint cho học sinh",
          "trò chơi powerpoint cho học sinh tiểu học",
          "tạo câu hỏi trắc nghiệm powerpoint",
          "trò chơi khởi động powerpoint",
          "make quiz powerpoint",
        ],
      },
      eyebrow: "Sản phẩm · Giáo dục",
      title: "Easy Slides",
      tagline: "Biến câu hỏi thành trò chơi PowerPoint sinh động chỉ trong vài phút.",
      description:
        "Thầy cô chỉ cần gõ hoặc dán câu hỏi, đánh dấu đáp án đúng, chọn giao diện rồi tải về file .pptx trình chiếu được ngay trên PowerPoint, không cần cài thêm tiện ích. Câu hỏi hiện ra có hiệu ứng, đáp án bừng sáng, kèm âm thanh và pháo giấy. Miễn phí, không cần tài khoản.",
      highlights: [
        { value: "15", label: "Mẫu giao diện" },
        { value: "41", label: "Hiệu ứng xuất hiện & nhấn mạnh" },
        { value: "37", label: "Hiệu ứng chuyển trang" },
        { value: "40+", label: "Âm thanh vui nhộn" },
      ],
      overviewTitle: "Một trò chơi thực sự, không chỉ là bộ slide",
      overview:
        "Tự làm một trò chơi đố vui trên PowerPoint thường ngốn cả buổi tối chỉ để chỉnh hiệu ứng và trigger cho một tiết học. Easy Slides làm phần việc đó thay thầy cô. Mỗi câu hỏi có từ hai đến bốn đáp án, có thể kèm một hình ảnh; thầy cô chọn giao diện và tải về một file .pptx bình thường. Khi lên lớp, từng câu hỏi xuất hiện có hiệu ứng, rồi đáp án được công bố theo một trong hai cách: bấm để lật đáp án — các đáp án sai mờ đi kèm dấu ✗ đỏ, đáp án đúng chuyển xanh kèm dấu tích, một lời khen như \"Giỏi quá!\" và pháo giấy — hoặc chuyển sang chế độ chọn đáp án, thầy cô bấm vào đúng đáp án mà các con hô lên: chọn sai thì rung lắc kèm tiếng còi, chọn đúng thì cả lớp cùng ăn mừng. Hiệu ứng được chọn ngẫu nhiên nhưng hợp lý cho từng slide, theo ba phong cách Nhẹ nhàng, Vui nhộn hoặc Sôi động, nên không câu nào giống câu nào. Ở chế độ Đơn giản, mọi thứ được chọn tự động; ở chế độ Nâng cao, thầy cô tuỳ chỉnh từng slide.",
      capabilities: [
        {
          title: "Nhập câu hỏi, nhận trò chơi",
          description:
            "Gõ hoặc dán câu hỏi, mỗi câu từ hai đến bốn đáp án, đánh dấu đáp án đúng và thêm hình minh hoạ nếu muốn.",
        },
        {
          title: "Hai cách công bố đáp án",
          description:
            "Bấm để lật đáp án — sai thì mờ đi kèm dấu ✗ đỏ, đúng thì chuyển xanh — hoặc bấm vào đáp án cả lớp hô lên để xem nó rung lắc hay ăn mừng.",
        },
        {
          title: "15 mẫu giao diện",
          description:
            "Từ Bảng đen, Truyện tranh đến Vũ trụ, Đáy biển, kèm slide mở đầu và slide kết thúc \"Cả lớp giỏi quá!\" cho trọn vẹn trò chơi.",
        },
        {
          title: "Hiệu ứng không lặp lại",
          description:
            "30 hiệu ứng xuất hiện, 11 hiệu ứng nhấn mạnh và 37 kiểu chuyển trang, phối riêng cho từng slide theo phong cách Nhẹ nhàng, Vui nhộn hoặc Sôi động. Chế độ Đơn giản tự chọn giúp, chế độ Nâng cao để thầy cô tự quyết.",
        },
        {
          title: "Âm thanh và đồng hồ đếm ngược",
          description:
            "Hơn 40 âm thanh, từ tiếng chuông có sẵn đến giọng đọc \"Correct!\", cùng thanh đếm ngược tuỳ chọn, hết giờ hiện nhãn \"Hết giờ!\".",
        },
        {
          title: "Riêng tư ngay từ thiết kế",
          description:
            "Mọi thứ chạy trên trình duyệt: không tải gì lên mạng, dùng được cả khi offline, và có chế độ trình chiếu thử để xem trước trước khi tải về.",
        },
      ],
      outcomesTitle: "Thầy cô nhận được gì",
      outcomes: [
        "Trò chơi đố vui sẵn sàng trong vài phút thay vì cả buổi tối",
        "File .pptx chuẩn, trình chiếu được trên PowerPoint mà không cần tiện ích",
        "Bài nào cũng sinh động vì hiệu ứng thay đổi theo từng slide",
        "Câu hỏi và hình ảnh vẫn nằm trên máy tính của thầy cô",
      ],
      useCasesTitle: "Phù hợp với ai",
      useCases: [
        {
          title: "Lớp học tiểu học",
          description:
            "Trò chơi khởi động đầu giờ hay ôn bài cuối tiết, cả lớp cùng hô đáp án.",
        },
        {
          title: "Ôn tập THCS, THPT",
          description:
            "Biến phiếu ôn tập thành trò chơi có tính giờ trước mỗi bài kiểm tra.",
        },
        {
          title: "Gia sư và trung tâm tiếng Anh",
          description:
            "Trò chơi từ vựng, ngữ pháp nhanh gọn, nhiều màu sắc cho các nhóm nhỏ.",
        },
        {
          title: "Giảng viên, đào tạo nội bộ",
          description:
            "Câu hỏi kiểm tra nhanh giúp buổi đào tạo hay hội nhập nhân viên mới bớt buồn ngủ.",
        },
      ],
      faq: [
        {
          q: "Easy Slides có miễn phí không?",
          a: "Có. Easy Slides hoàn toàn miễn phí, không cần tạo tài khoản hay đăng ký.",
        },
        {
          q: "Có cần cài đặt hay kết nối mạng không?",
          a: "Không cần cài đặt — công cụ chạy ngay trên trình duyệt. Sau khi trang đã tải xong, thầy cô vẫn dùng được khi không có mạng, và file .pptx tải về trình chiếu trên PowerPoint mà không cần tiện ích nào.",
        },
        {
          q: "Dùng được với phiên bản PowerPoint nào?",
          a: "File tải về là file .pptx chuẩn. Một số hiệu ứng chuyển trang cầu kỳ cần PowerPoint 2010 trở lên; ở phiên bản cũ hơn, chúng tự chuyển thành hiệu ứng mờ dần, còn mọi thứ khác vẫn chạy bình thường.",
        },
        {
          q: "Tôi có chỉnh sửa slide sau khi tải về được không?",
          a: "Được. Đây là file PowerPoint bình thường, thầy cô có thể sửa chữ, hình ảnh, màu sắc hay hiệu ứng như với bất kỳ bài trình chiếu nào tự làm.",
        },
        {
          q: "Câu hỏi và hình ảnh có bị tải lên mạng không?",
          a: "Không. Bài trình chiếu được tạo hoàn toàn trên trình duyệt; câu hỏi và hình ảnh của thầy cô không bao giờ rời khỏi máy tính.",
        },
        {
          q: "Công cụ có những ngôn ngữ nào?",
          a: "Easy Slides có giao diện tiếng Việt và tiếng Anh.",
        },
      ],
      ctaDescription:
        "Mở Easy Slides, dán câu hỏi vào và có ngay trò chơi đố vui PowerPoint sinh động cho tiết học tới — miễn phí, không cần tài khoản.",
    },
    arcAscension: {
      meta: {
        title: "ARC: Ascension — trò chơi thẻ bài dị thể cho Android và Windows",
        description:
          "Phong ấn dị thể vào thẻ bài: mở hộp bí ẩn, xếp bộ bài năm thẻ và leo Tháp Thăng Thiên 100 tầng. Trò chơi thẻ bài màn hình dọc miễn phí, chơi hoàn toàn offline, đang trong giai đoạn beta.",
        keywords: [
          "trò chơi thẻ bài",
          "game thẻ bài offline",
          "game thẻ bài dị thể",
          "game màn hình dọc",
          "game xếp bộ bài",
          "game Việt",
        ],
      },
      eyebrow: "Sản phẩm · Trò chơi",
      title: "ARC: Ascension",
      tagline: "Phong ấn dị thể vào thẻ bài, rồi leo lên Tháp Thăng Thiên.",
      description:
        "Bạn là Đặc vụ 07 của Đội Ứng phó Dị thể. Đội không còn đuổi dị thể khắp các ngõ hẻm nữa: giờ chúng được phong ấn vào thẻ bài. Mở hộp bí ẩn để mở rộng bộ sưu tập, rèn những thẻ rút được, xếp bộ bài năm thẻ rồi chiến đấu qua các trạm của chiến dịch và leo lên ngọn tháp không có đỉnh. Miễn phí, đang trong giai đoạn beta.",
      highlights: [
        { value: "140", label: "Thẻ dị thể" },
        { value: "24", label: "Trạm chiến dịch" },
        { value: "100", label: "Tầng tháp" },
        { value: "5", label: "Hệ tương khắc" },
      ],
      gallery: {
        title: "Bên trong trò chơi",
        items: [
          {
            src: "/products/arc-ascension/card-1-vi.webp",
            alt: "Một thẻ huyền thoại bung ra từ hộp bí ẩn, phía trên các hộp Đồng, Bạc, Vàng và Lăng kính",
          },
          {
            src: "/products/arc-ascension/card-2-vi.webp",
            alt: "Bộ bài năm thẻ phía trên lưới thẻ dị thể đã sưu tầm",
          },
          {
            src: "/products/arc-ascension/card-3-vi.webp",
            alt: "Trận đấu với trùm tầng 100 của Tháp Thăng Thiên, kèm một đòn hoàn hảo x2",
          },
        ],
      },
      overviewTitle: "Bộ sưu tập để mở, để rèn và để chiến đấu",
      overview:
        "Mỗi thẻ là một dị thể, vẽ từ chân dung riêng của nó, với chỉ số HP, ATK, DEF và SPD tuỳ theo loài, độ hiếm, hạng sao và công rèn. Mở một hộp bí ẩn là cả một màn trình diễn: chiếc hộp rung mạnh dần khi ánh sáng rỉ ra từ các khe, rồi bung ra, từng thẻ bay ra úp mặt, lật lại và mô hình 3D của dị thể trồi lên từ thẻ. Sau đó là lò rèn — cường hóa một chỉ số bằng mảnh, dung hợp các bản trùng để lên hạng, hoặc liều tha hóa bằng hư không, viết lại mọi chỉ số và đôi khi cả hệ. Trong trận đấu, thẻ đang ra trận đối đầu với trùm trên sân khấu 2.5D, với đòn đặc trưng, vòng canh thời điểm cho đòn hoàn hảo và đổi thẻ dự bị, còn vòng tương khắc năm hệ quyết định bên nào chiếm ưu thế. Trò chơi được thiết kế cho màn hình dọc của điện thoại và chạy y hệt trên Windows.",
      capabilities: [
        {
          title: "Hộp bí ẩn",
          description:
            "Hộp Đồng, Bạc, Vàng và Lăng kính chứa từ ba đến năm thẻ với độ hiếm tối thiểu được bảo đảm, tỉ lệ rơi của từng loại được công khai trong Kho.",
        },
        {
          title: "Lò rèn",
          description:
            "Cường hóa ATK, DEF hoặc SPD, dung hợp các bản trùng để lên từ một đến năm sao, tha hóa thẻ bằng hư không, hoặc phân rã thẻ thừa lấy tài nguyên.",
        },
        {
          title: "Dị thể 3D sống động",
          description:
            "Cả 140 loài đều có mô hình 3D và hồ sơ trong Bách khoa, và mỗi lần rút thẻ, mô hình trồi lên từ chính tấm thẻ.",
        },
        {
          title: "Chiến dịch và tháp",
          description:
            "Ba chương, mỗi chương tám trạm và kết thúc bằng một trùm chương, rồi đến Tháp Thăng Thiên 100 tầng với thủ vệ ở mỗi năm tầng.",
        },
        {
          title: "Trận đấu canh thời điểm",
          description:
            "Hai mươi đòn đặc trưng, vòng canh thời điểm cho đòn gấp đôi sát thương, chế độ tự động và đổi thẻ dự bị. SPD cao giúp chí mạng và né đòn.",
        },
        {
          title: "Offline và riêng tư",
          description:
            "Không tài khoản, quảng cáo, phân tích hay mua bán, và không hề kết nối mạng. Tiến độ lưu trên thiết bị, bằng tiếng Việt hoặc tiếng Anh.",
        },
      ],
      outcomesTitle: "Bạn nhận được gì",
      outcomes: [
        "Một trò chơi trọn vẹn chơi offline, không cần đăng ký gì",
        "Không mua bán: mọi chiếc hộp đều kiếm được bằng cách chơi",
        "Chuỗi huấn luyện chín bước dạy từng tính năng, kèm phần thưởng",
        "Cùng một trò chơi trên điện thoại Android và máy tính Windows",
      ],
      useCasesTitle: "Dành cho ai",
      useCases: [
        {
          title: "Người sưu tầm",
          description:
            "Săn đủ 140 loài, thẻ ánh kim và thẻ năm sao.",
        },
        {
          title: "Người mê xếp bài",
          description:
            "Cân bằng bộ năm thẻ theo chỉ số, hệ và các nâng cấp từ lò rèn.",
        },
        {
          title: "Những phút rảnh",
          description:
            "Một trạm hay vài tầng tháp vừa một giờ giải lao, chơi một tay trên màn hình dọc.",
        },
        {
          title: "Chơi không cần mạng",
          description:
            "Trên chuyến bay hay đường đi làm, không cần kết nối, không cần tài khoản.",
        },
      ],
      faq: [
        {
          q: "ARC: Ascension có miễn phí không?",
          a: "Có. Bản beta miễn phí và trong game không có mua bán: hộp, vàng và mảnh đều đến từ việc chơi.",
        },
        {
          q: "Trò chơi chạy trên nền tảng nào?",
          a: "Điện thoại Android và máy tính Windows. Trên Windows, trò chơi mở trong một cửa sổ dọc có kích thước như màn hình điện thoại.",
        },
        {
          q: "Làm sao để tham gia bản beta?",
          a: "Liên hệ với chúng tôi qua trang liên hệ và chọn ARC: Ascension. Chúng tôi sẽ gửi bạn thông tin để tham gia.",
        },
        {
          q: "Có cần kết nối internet hay tài khoản không?",
          a: "Không. Trò chơi không bao giờ kết nối internet và không có tài khoản. Tiến độ được lưu ngay trên thiết bị của bạn.",
        },
        {
          q: "Trò chơi có thu thập dữ liệu không?",
          a: "Không. Không có quảng cáo hay công cụ phân tích, và trò chơi không dùng camera, micro hay vị trí của bạn.",
        },
        {
          q: "Trò chơi có những ngôn ngữ nào?",
          a: "Tiếng Việt và tiếng Anh, chọn ở lần mở đầu tiên và đổi được trong phần Cài đặt.",
        },
      ],
      ctaDescription:
        "ARC: Ascension đang trong giai đoạn beta trên Android và Windows. Hãy cho chúng tôi biết bạn muốn chơi, chúng tôi sẽ gửi thông tin để tham gia.",
    },
  },
};
