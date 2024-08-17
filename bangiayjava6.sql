create database DuanWebBanGiay

SET IDENTITY_INSERT Account ON;

INSERT INTO Account (u_id, username, password, is_sell, is_admin, email, created_at, updated_at,profile_image) 
VALUES 
(1, 'admin', '123456', 0, 1, 'nhom@gmail.com', GETDATE(), GETDATE(),'https://www.chuphinhsanpham.vn/wp-content/uploads/2018/09/chup-anh-cv-dep-2.jpg'),
(2, 'truong', '123456', 1, 0, 'nhom2_1@gmail.com', GETDATE(), GETDATE(),'https://htmediagroup.vn/wp-content/uploads/2021/07/anh-profile-nam-min.jpg'),
(3, 'baokha', '123456', 1, 0, 'nhom2@gmail.com', GETDATE(), GETDATE(),'https://chupanhthe.vn/img/Chup-hinh-profile-gia-re-tphcm-2.jpg'),
(4, 'trunghieu', '123456', 1, 0, 'nhom2_2@gmail.com', GETDATE(), GETDATE(),'https://lavenderstudio.com.vn/wp-content/uploads/2021/07/profile-ca-nhan-1-1.jpg'),
(5, 'quangquy', '123456', 1, 0, 'nhom2_3@gmail.com', GETDATE(), GETDATE(),'https://profilecanhan.com/upload/elfinder/Hinh%20san%20pham/chup-hinh-profile-ca-nhan.jpg'),
(6, 'duykhanh', '123456', 1, 0, 'nhom2_4@gmail.com', GETDATE(), GETDATE(),'https://lavenderstudio.com.vn/wp-content/uploads/2021/07/chup-anh-profile-nam-3-2-683x1024.jpg'),
(7, 'vulam', '123456', 1, 0, 'nhom2_5@gmail.com', GETDATE(), GETDATE(),'https://tuarts.net/wp-content/uploads/2021/06/87963583_3245470518810233_7728094780663529472_n.jpg');


SET IDENTITY_INSERT Account OFF;

SET IDENTITY_INSERT category ON;

INSERT INTO category (cid, cname)
VALUES (1, N'Giày Adidas');
INSERT INTO category (cid, cname)
VALUES (2, N'Giày Nike');
INSERT INTO category (cid, cname)
VALUES (3, N'Giày Jordan');
INSERT INTO category (cid, cname)
VALUES (4, N'Giày Balenciaga');
INSERT INTO category (cid, cname)
VALUES (5, N'Giày Burberry');
INSERT INTO category (cid, cname)
VALUES (6, N'Giày Supreme');
INSERT INTO category (cid, cname)
VALUES (7, N'Giày Louis Vuitton');
INSERT INTO category (cid, cname)
VALUES (8, N'Giày Dior');

SET IDENTITY_INSERT category OFF;


SET IDENTITY_INSERT product ON;

INSERT INTO product(
    id, average_rating, color, created_at, delivery, description, discount, 
    image, image2, image3, image4, model, name, price, title,
    updated_at, category_id, seller_id
)
VALUES 
	(1, 4.8, N'WHITE', GETDATE(), N'KhoHCM', 
    N'This shoe features a Cloud White leather upper with grey suede fabric overlays. The upper of this shoe is similar to other Samba OG versions, with a T-shape overlay on the toe and 3-stripes on the side. Metallic gold lettering spelling “SAMBA” runs along the 3-stripes and adds some shine to the side. In contrast, a simple Adidas Trefoil logo is found on the tongue label.
	Our experts appreciate the gum rubber heel, which is dark rather than the usual yellowish tone seen on gum materials. The Adidas Samba OG Cloud White Core Black (GS) was released on August 10, 2023.', 20, 
    N'https://cdn.authentic-shoes.com/wp-content/uploads/2023/10/IE3675-9-768x768.png', 
    N'https://cdn.authentic-shoes.com/wp-content/uploads/2023/10/IE3675-7.png', 
    N'https://cdn.authentic-shoes.com/wp-content/uploads/2023/10/IE3675-9.png', 
    N'https://cdn.authentic-shoes.com/wp-content/uploads/2023/10/61888511.png', 
    N'Giày Adidas', N'Adidas Samba OG ‘White’ IE3675', 2100000.00, 
    N'The Adidas Samba OG Cloud White Core Black (GS) is a kids’ version of the classic Adidas Samba OG and is presented in a neutral color palette consisting of Cloud White, Core Black, and Gum.', 
    GETDATE(), '01', 2),
	(2, 4.5, N'PINK', GETDATE(), N'KhoHCM', 
    N'Are you ready to celebrate Valentines Day? Whether you have a significant other or not, you shouldnt miss the upcoming release of the Nike Air Max 90 QS Valentines Day 2021. Official images of the Swooshs legendary AM90 design show off the release Brand new wrapped in exciting color arrangements that will make you fall in love.', 22, 
    N'https://cdn.authentic-shoes.com/wp-content/uploads/2023/04/732744_01.jpg_8187354d31d14ab9979599882b8839a3.png', 
    N'https://cdn.authentic-shoes.com/wp-content/uploads/2023/04/3c180f-womens-nike-air-max-90-valentines-day-dd8029-100-release-date-1_e19b5cfff3af4c438a265ee7c6fcab5c.png', 
    N'https://cdn.authentic-shoes.com/wp-content/uploads/2023/04/maxresdefault__11__946454baa81b440bbe7f0c8958a50fe4.png', 
    N'https://cdn.authentic-shoes.com/wp-content/uploads/2023/04/valentines-day-3_1683c6a707eb487f8c919b14da6b94c4.png', 
    N'Giày Nike', N'Giày Nike Air Max 90 ‘Love Letter’ DD8029-100', 6900000.00, 
    N'What makes the Nike Air Max 90 Love Letter so special?', 
    GETDATE(), '02', 2),
	(3, 4.6, N'WHITE', GETDATE(), N'KhoHCM', 
    N'The Next Nature Nike Air Max 90 Womens Shoe in WHITE BLACK features a white breathable fabric upper overlaid with white synthetic leather. White dominates the footwears upper, from the elastic and toes to the footbed and insole. Nikes black Swoosh logo on the side panel matches the branding details on the shoes upper. A black Nike Air logo appears on the heel, an Air Max logo on the TPU side panel window, a Nike logo on the footbed, and a Next Nature pinwheel logo on the insole.', 29, 
    N'https://cdn.authentic-shoes.com/wp-content/uploads/2023/04/dh8010-101-2_c4987f8d7d504ea6a5d6a7bda93e16be.png', 
    N'https://cdn.authentic-shoes.com/wp-content/uploads/2023/05/DH8010-101-1.png', 
    N'https://cdn.authentic-shoes.com/wp-content/uploads/2023/05/DH8010-101.png', 
    N'https://cdn.authentic-shoes.com/wp-content/uploads/2023/04/dh8010-101-1_03d8a96481934457a9c1b78ed02db7b4.png', 
    N'Giày Nike', N'Giày Nike Air Max 90 Next Nature ‘Black White’ DH8010-101', 2900000.00, 
    N'The Nike Air Max 90 Next Nature White Black (Womens Shoes) recreates the beauty of 90s running footwear using sustainable materials and footwear technologies that have been developed over decades. This shoe is specially designed for women.', 
    GETDATE(), '02', 2),
	(4, 4.6, N'BLACK', GETDATE(), N'KhoHCM', 
    N'The Next Nature Nike Air Max 90 Womens Shoe in WHITE BLACK features a white breathable fabric upper overlaid with white synthetic leather. White dominates the footwears upper, from the elastic and toes to the footbed and insole. Nikes black Swoosh logo on the side panel matches the branding details on the shoes upper. A black Nike Air logo appears on the heel, an Air Max logo on the TPU side panel window, a Nike logo on the footbed, and a Next Nature pinwheel logo on the insole.', 23, 
    N'https://cdn.authentic-shoes.com/wp-content/uploads/2023/04/nike-air-max-90-black-university__2__c0cabe8c615a4edbb4d31562009e7570.png', 
    N'https://cdn.authentic-shoes.com/wp-content/uploads/2023/04/nike-air-max-90-black-university__2__c0cabe8c615a4edbb4d31562009e7570.png', 
    N'https://cdn.authentic-shoes.com/wp-content/uploads/2023/04/s-l1600_8f47b51ffddb4cefaf8622591a93d7e1.png', 
    N'https://cdn.authentic-shoes.com/wp-content/uploads/2023/04/7c07fb1a49094048958982476dff24e9_89b43376fc2941e2a30a752f6eca89bf.png', 
    N'Giày Nike', N'Giày Nike Air Max 90 Next Nature ‘Black White’ DH8010-101', 2900000.00, 
    N'The Nike Air Max 90 Next Nature White Black (Womens Shoes) recreates the beauty of 90s running footwear using sustainable materials and footwear technologies that have been developed over decades. This shoe is specially designed for women.', 
    GETDATE(), '02', 2),
	(5, 4.7, N'RED', GETDATE(), N'KhoHCM', 
    N'Buy 100% genuine Nike Air Max 90 Air Sprung DM8171-001 Shoes available at Authentic Shoes. Free 1-day shipping. Commitment to pay X5 if detected Fake. Free return for size. FREE shoe cleaning for life. BUY NOW!', 28, 
    N'https://cdn.authentic-shoes.com/wp-content/uploads/2023/04/nike-air-max-90-air-sprung-iron_066b9441d1a84ee9ae87cc2bf6cf363d.png', 
    N'https://cdn.authentic-shoes.com/wp-content/uploads/2023/04/nike-air-max-90-air-sprung-dm817__1__643e905850584dcb86a87df42a24a7fc.png', 
    N'https://cdn.authentic-shoes.com/wp-content/uploads/2023/04/nike-air-max-90-sprung-dm8171-00_dae86206d7d949a0b2121bc987c90e26.png', 
    N'https://cdn.authentic-shoes.com/wp-content/uploads/2023/04/nike-air-max-90-air-sprung-1_18cb0bc7e1ce495e83cf18bfe53612a9.png', 
    N'Giày Nike', N'Giày Nike Air Max 90 ‘Air Sprung’ DM8171-001', 2900000.00, 
    N'Authentic Shoes - Genuine collector and distributor of leading international fashion brands in Vietnam', 
    GETDATE(), '02', 2),
	(6, 4.8, N'WHITE', GETDATE(), N'KhoHCM', 
    N'Here are detailed descriptions of the upcoming Triple White Yeezy Boost 350 V2 White. While theres still no confirmed release date, adidas recently released official images.
	The stark monochrome look is one of the most sought-after styles among fans of the line. As Kanye West and adidas continue their collaboration, its one of many styles planned for 2017.', 52, 
    N'https://cdn.authentic-shoes.com/wp-content/uploads/2023/04/116662_01.jpg_c26a7021c94443deac7429c75ae2e59c.png', 
    N'https://cdn.authentic-shoes.com/wp-content/uploads/2023/04/adidas_yeezy_boost_350_v2_triple_white_01_fd88d6b0a48d42ed87ac5ae8bed01c45.jpg', 
    N'https://cdn.authentic-shoes.com/wp-content/uploads/2023/04/adidas_yeezy_boost_350_v2_triple_white_4_e0037d88fd7e42d18bfe3f3a78083a3a.jpg', 
    N'https://cdn.authentic-shoes.com/wp-content/uploads/2023/04/adidas_yeezy_boost_350_v2_triple_white_05_63614122608342b1b97bb3410da1cdd8.jpg', 
    N'Giày Adidas', N'Giày Adidas Yeezy Boost 350 V2 ‘Cream’ CP9366', 12900000.00, 
    N'What makes the adidas Yeezy Boost 350 V2 Cream so special?', 
    GETDATE(), '01', 2),
	(7, 4.2, N'BLACK', GETDATE(), N'KhoHCM', 
    N'Here are detailed descriptions of the upcoming Triple White Yeezy Boost 350 V2 White. While theres still no confirmed release date, adidas recently released official images.
	The stark monochrome look is one of the most sought-after styles among fans of the line. As Kanye West and adidas continue their collaboration, its one of many styles planned for 2017.', 52, 
    N'https://cdn.authentic-shoes.com/wp-content/uploads/2023/04/505488_01.jpg_8d936cdf8c234afdbb0baf87c96ab923.png', 
    N'https://cdn.authentic-shoes.com/wp-content/uploads/2023/04/yeezy-boost-350-v2-black-non-ref_ce34c3aac745467bbfef0282db2b8702.png', 
    N'https://cdn.authentic-shoes.com/wp-content/uploads/2023/04/m_image_2019_05_adidas-yeezy-boost-350-v2-black-static-closer-look-1-1_d05e0a8fe71e4993a7432bacc1f5b2ab.jpg', 
    N'https://cdn.authentic-shoes.com/wp-content/uploads/2023/04/yeezyboost350v2blackreflectivenonreflectivefakevsrealguide-1652_e15dc59d1c7a4469b132f30148c71adc.jpg', 
    N'Giày Adidas', N'Giày Adidas Yeezy Boost 350 V2 ‘Cream’ CP9366', 12900000.00, 
    N'What makes the adidas Yeezy Boost 350 V2 Cream so special?', 
    GETDATE(), '01', 2),
	(8, 4.7, N'GRAY', GETDATE(), N'KhoHCM', 
    N'Finally, the Yeezy Boost 350 V2 Sesame is set to hit retailers and it could be the best V2 release yet. With a traditional Ye silhouette and a sophisticated color palette, this is sure to be the shoe of the fall season.
	Coming with a cream upper, this sneaker is perfectly complimented by a gum sole. This gum seeps onto the heel counter to add a layer of detail, similar to a semi-frozen yellow.', 52, 
    N'https://cdn.authentic-shoes.com/wp-content/uploads/2023/04/f99710_ab9930c952354b64badcb508655d2b17.jpeg', 
    N'https://cdn.authentic-shoes.com/wp-content/uploads/2023/04/adidas-yeezy-boost-350-v2-sesame_68ac5fe7828d41a1832924707c9e320a.png', 
    N'https://cdn.authentic-shoes.com/wp-content/uploads/2023/04/giay-adidas-yeezy-boost-350-v2-s_f6e6203e44b1438eaba1e0ea0656ec3a.png', 
    N'https://cdn.authentic-shoes.com/wp-content/uploads/2023/04/thiet-ke-chua-co-ten-2022-09-24t_ad0872900d794ac6a873400537236e6c.png', 
    N'Giày Adidas', N'Giày Adidas Yeezy Boost 350 V2 ‘Sesame’ F99710', 15900000.00, 
    N'What makes the Adidas Yeezy Boost 350 V2 Sesame so special?', 
    GETDATE(), '01', 2),
	(9, 4.8, N'BLUE', GETDATE(), N'KhoHCM', 
    N'The Nike Air Jordan 1 Mid University Blue is a pair of shoes with a UNC-oriented color scheme inspired by the uniform colors of the UNC (University of North Carolina) team, the university where Michael Jordan shined when he was just a kid. is a freshman (freshman) and is also the next step for Jordan to enter the extremely successful basketball career path that we know.', 52, 
    N'https://cdn.authentic-shoes.com/wp-content/uploads/2023/04/912760_01.jpg_17f55f1f9466472386bf88d94cfe9325.png', 
    N'https://cdn.authentic-shoes.com/wp-content/uploads/2023/04/air-jordan-1-mid-university-blue__2__b668912828fe4c9bb08ff1c944950572.png', 
    N'https://cdn.authentic-shoes.com/wp-content/uploads/2023/04/41185643_9ab6bb1f24cf401cad0df4e61192fb13.png', 
    N'https://cdn.authentic-shoes.com/wp-content/uploads/2023/04/screenshot_2022.05.31_13.43.50.977_8b24104e53754ab9a6195b09850b1c93.png', 
    N'Giày Jordan', N'Giày Nike Air Jordan 1 Mid ‘University Blue’ BQ6472-141', 5900000.00, 
    N'What makes the Nike Air Jordan 1 Mid University Blue special?', 
    GETDATE(), '03', 2),
	(10, 4.2, N'BLACK', GETDATE(), N'KhoHCM', 
    N'The Jordan 1 Mid Panda for women is designed with a black and white color palette that gives it a pandas look. The Nike Swoosh is also black and can be seen on the side panels, while the Air Jordan Wings logo appears in white. The footwear also has a rubber outsole that provides adhesion and grip, even on slippery surfaces. Additionally, the footwear is canvas with an extra padded collar and tongue, providing softness and support.', 52, 
    N'https://cdn.authentic-shoes.com/wp-content/uploads/2023/07/Air-Jordan-1-Mid-Panda-Product.png', 
    N'https://cdn.authentic-shoes.com/wp-content/uploads/2023/07/Screenshot_2023.07.11_12.21.06.957.png', 
    N'https://cdn.authentic-shoes.com/wp-content/uploads/2023/07/Screenshot_2023.07.11_12.21.16.591.png', 
    N'https://cdn.authentic-shoes.com/wp-content/uploads/2023/07/Screenshot_2023.07.11_12.21.24.242.png', 
    N'Giày Jordan', N'Giày Nike Air Jordan 1 Mid ‘University Blue’ BQ6472-141', 7900000.00, 
    N'The Jordan 1 Mid Panda (Womens) was released as part of the Jordan 1 Mid collection and is crafted specifically for womens sizes.', 
    GETDATE(), '03', 2),
	(11, 4.5, N'White', GETDATE(), N'KhoHCM', 
    N'Are you ready to celebrate Valentines Day? Whether you have a significant other or not, you shouldnt miss the upcoming release of the Nike Air Max 90 QS Valentines Day 2021. Official images of the Swooshs legendary AM90 design show off the release Brand new wrapped in exciting color arrangements that will make you fall in love.', 22, 
    N'https://cdn.authentic-shoes.com/wp-content/uploads/2023/04/ci9105_100.png_a8dcdb29c641409d829f62eb278c2dd3.png', 
    N'https://cdn.authentic-shoes.com/wp-content/uploads/2023/04/j6gvodn-x7ip333lvhczvk7eohv-rgcq_ce456297cf6747f3ba7836826cc3289e.png', 
    N'https://cdn.authentic-shoes.com/wp-content/uploads/2023/04/fp_138961_a_7f0aa7bdacd642c0b66068516ed4d042.jpeg', 
    N'https://cdn.authentic-shoes.com/wp-content/uploads/2023/04/61715759_374430409874079_600872220730530255_n-720x432_49e53ad07c4540c0933072706dc3356d.jpg', 
    N'Giày Nike', N'Giày Nike Air Max 98 Premium ‘Unité Totale’ CI9105-100', 3100000.00, 
    N'What makes the Nike Air Max 98 Premium ‘Unité Totale’ so special?', 
    GETDATE(), '02', 2),

(12, 4.8, N'BLACK', GETDATE(), N'KhoHCM', 
    N'Are you ready to celebrate Valentines Day? Whether you have a significant other or not, you shouldnt miss the upcoming release of the Nike Air Max 90 QS Valentines Day 2021. Official images of the Swooshs legendary AM90 design show off the release Brand new wrapped in exciting color arrangements that will make you fall in love.', 22, 
    N'https://cdn.authentic-shoes.com/wp-content/uploads/2023/04/749571_011.png_658942de12e04b8d9ef4d5674be0e632.png', 
    N'https://cdn.authentic-shoes.com/wp-content/uploads/2023/04/screenshot_2022.09.27_17.58.53.6_61faa2da896a49e6b8b833a660eb18ca.png', 
    N'https://cdn.authentic-shoes.com/wp-content/uploads/2023/04/eng_pl_nike-classic-cortez-leather-749571-011-1211_7_07d8632a014d47e7bd81aa878c04d829.png', 
    N'https://cdn.authentic-shoes.com/wp-content/uploads/2023/04/l_nike-classic-cortez-leather-black-dark-grey-white-749571-011-30066_7_f99f591df5b249bda72b318a8d7b33e6.png', 
    N'Giày Nike', N'Giày Nike Classic Cortez Leather ‘Anthracite’ 749571-011', 4500000.00, 
    N'What makes the Nike Classic Cortez Leather ‘Anthracite’ so special?', 
    GETDATE(), '02', 2),

(13, 4.9, N'BLACK', GETDATE(), N'KhoHCM', 
    N'Are you ready to celebrate Valentines Day? Whether you have a significant other or not, you shouldnt miss the upcoming release of the Nike Air Max 90 QS Valentines Day 2021. Official images of the Swooshs legendary AM90 design show off the release Brand new wrapped in exciting color arrangements that will make you fall in love.', 22, 
    N'https://cdn.authentic-shoes.com/wp-content/uploads/2023/04/505488_01.jpg_8d936cdf8c234afdbb0baf87c96ab923.png', 
    N'https://cdn.authentic-shoes.com/wp-content/uploads/2023/04/yeezy-boost-350-v2-black-non-ref_ce34c3aac745467bbfef0282db2b8702.png', 
    N'https://cdn.authentic-shoes.com/wp-content/uploads/2023/04/yeezyboost350v2blackreflectivenonreflectivefakevsrealguide-1652_e15dc59d1c7a4469b132f30148c71adc.jpg', 
    N'https://cdn.authentic-shoes.com/wp-content/uploads/2023/04/keep324-4_c4425131f5c546dba2b2558bf6a23443.png', 
    N'Giày Adidas', N'Giày Adidas Yeezy Boost 350 V2 Black Non-Reflective FU9006', 5800000.00, 
    N'What makes the Adidas Yeezy Boost 350 V2 Black Non-Reflective so special?', 
    GETDATE(), '01', 1),
(14, 4.8, N'WHITE', GETDATE(), N'KhoHCM', 
    N'Are you ready to celebrate Valentines Day? Whether you have a significant other or not, you shouldnt miss the upcoming release of the Nike Air Max 90 QS Valentines Day 2021. Official images of the Swooshs legendary AM90 design show off the release Brand new wrapped in exciting color arrangements that will make you fall in love.', 22, 
    N'https://cdn.authentic-shoes.com/wp-content/uploads/2023/04/116662_01.jpg_c26a7021c94443deac7429c75ae2e59c.png', 
    N'https://cdn.authentic-shoes.com/wp-content/uploads/2023/04/adidas_yeezy_boost_350_v2_triple_white_01_fd88d6b0a48d42ed87ac5ae8bed01c45.jpg', 
    N'https://cdn.authentic-shoes.com/wp-content/uploads/2023/04/adidas_yeezy_boost_350_v2_triple_white_05_63614122608342b1b97bb3410da1cdd8.jpg', 
    N'https://cdn.authentic-shoes.com/wp-content/uploads/2023/04/yeezy-boost-350-v2-white-cp9366-5_a894f59fb090420fb50d5ccd08020ff6.jpg', 
    N'Giày Adidas', N'Giày Adidas Yeezy Boost 350 V2 ‘Cream’ CP9366', 6200000.00, 
    N'What makes the Adidas Yeezy Boost 350 V2 ‘Cream’ so special?', 
    GETDATE(), '01', 1),

(15, 4.7, N'PINK', GETDATE(), N'KhoHCM', 
    N'Are you ready to celebrate Valentines Day? Whether you have a significant other or not, you shouldnt miss the upcoming release of the Nike Air Max 90 QS Valentines Day 2021. Official images of the Swooshs legendary AM90 design show off the release Brand new wrapped in exciting color arrangements that will make you fall in love.', 22, 
    N'https://cdn.authentic-shoes.com/wp-content/uploads/2023/04/702165_01.jpg_eaf553e7cf694932824ed10b7e0bfae5.png', 
    N'https://cdn.authentic-shoes.com/wp-content/uploads/2023/04/screenshot_2022.10.20_15.51.49.123_1cf7c68e734c44bcb9e57feb15df19a1.png', 
    N'https://cdn.authentic-shoes.com/wp-content/uploads/2023/04/145072191_2507086059588383_1136272806433747401_o_b7160026c3de432bb7177f9e152e992f.png', 
    N'https://cdn.authentic-shoes.com/wp-content/uploads/2023/04/air-jordan-1-high-zoom-air-cmft_af90468b2825494a9316426be7568cf5.jpg', 
    N'Giày Jordan', N'Giày Nike Air Jordan 1 Wmns High Zoom Air CMFT ‘Pink Glaze’ CT0979-601', 5000000.00, 
    N'What makes the Nike Air Jordan 1 Wmns High Zoom Air CMFT ‘Pink Glaze’ so special?', 
    GETDATE(), '03', 3),
(16, 4.6, N'YELLOW', GETDATE(), N'KhoHCM', 
    N'Are you ready to celebrate Valentines Day? Whether you have a significant other or not, you shouldnt miss the upcoming release of the Nike Air Max 90 QS Valentines Day 2021. Official images of the Swooshs legendary AM90 design show off the release Brand new wrapped in exciting color arrangements that will make you fall in love.', 22, 
    N'https://cdn.authentic-shoes.com/wp-content/uploads/2023/04/dq0659_700.png_8cccc27499d64e36978076974f164cec.png', 
    N'https://cdn.authentic-shoes.com/wp-content/uploads/2023/04/air-jordan-1-zoom-cmft-dq0659-700-release-date-3_ac207b7c7cd042a18d23e4507f4ad733.png', 
    N'https://cdn.authentic-shoes.com/wp-content/uploads/2023/04/hypebeast__1__382d56a85e5f427384829aa2937d8f17.png', 
    N'https://cdn.authentic-shoes.com/wp-content/uploads/2023/04/air-jordan-1-zoom-cmft-gold-laser-dq0659-700-0_eb6cea5e25f6441fac9cdb16f955fcc7.png', 
    N'Giày Jordan', N'Giày Nike Air Jordan 1 Zoom Comfort ‘Gold Laser’ DQ0659-700', 4800000.00, 
    N'What makes the Nike Air Jordan 1 Zoom Comfort ‘Gold Laser’ so special?', 
    GETDATE(), '03', 3),

(17, 4.8, N'BLACK', GETDATE(), N'KhoHCM', 
    N'Are you ready to celebrate Valentines Day? Whether you have a significant other or not, you shouldnt miss the upcoming release of the Nike Air Max 90 QS Valentines Day 2021. Official images of the Swooshs legendary AM90 design show off the release Brand new wrapped in exciting color arrangements that will make you fall in love.', 22, 
    N'https://cdn.authentic-shoes.com/wp-content/uploads/2023/05/Balenciaga-Defender-Clog-Black-R.png', 
    N'https://cdn.authentic-shoes.com/wp-content/uploads/2023/04/ecom-735252w3cv21000_h_dff7167a817a440593707ee08dcffe43.png', 
    N'https://cdn.authentic-shoes.com/wp-content/uploads/2023/04/ecom-735252w3cv21000_e_1172ce006ef046f7a3c411c1d584eef0.png', 
    N'https://cdn.authentic-shoes.com/wp-content/uploads/2023/04/ecom-735252w3cv21000_i_1e34f0c44d53428e9fcd0b0a9a31147d.png', 
    N'Giày Balenciaga', N'Giày Balenciaga Defender Clog ‘Black’ 735252W3CV21000', 26000000.00, 
    N'What makes the Balenciaga Defender Clog so special?', 
    GETDATE(), '04', 4),
(18, 4.9, N'RED', GETDATE(), N'KhoHCM', 
    N'Are you ready to celebrate Valentines Day? Whether you have a significant other or not, you shouldnt miss the upcoming release of the Nike Air Max 90 QS Valentines Day 2021. Official images of the Swooshs legendary AM90 design show off the release Brand new wrapped in exciting color arrangements that will make you fall in love.', 22, 
    N'https://cdn.authentic-shoes.com/wp-content/uploads/2023/04/ecom-685613w2raa6010_f_354b71cbb0794833a2b65a313cb4491e.png', 
    N'https://cdn.authentic-shoes.com/wp-content/uploads/2023/04/ecom-685613w2raa6010_k_28cf0ba5bf234b818cabeffcfc8e0dbf.png', 
    N'https://cdn.authentic-shoes.com/wp-content/uploads/2023/04/ecom-685613w2raa6010_e_16dad517ec4943879b4d84c281bbee98.png', 
    N'https://cdn.authentic-shoes.com/wp-content/uploads/2023/04/ecom-685613w2raa6010_j_aacd0094394f4080866e24f080f713f6.png', 
    N'Giày Balenciaga', N'Giày Balenciaga Defender ‘Red’ 685613W2RAA6010', 35000000.00, 
    N'What makes the Balenciaga Defender so special?', 
    GETDATE(), '04', 4),

(19, 4.9, N'BLACK', GETDATE(), N'KhoHCM', 
    N'Are you ready to celebrate Valentines Day? Whether you have a significant other or not, you shouldnt miss the upcoming release of the Nike Air Max 90 QS Valentines Day 2021. Official images of the Swooshs legendary AM90 design show off the release Brand new wrapped in exciting color arrangements that will make you fall in love.', 22, 
    N'https://cdn.authentic-shoes.com/wp-content/uploads/2023/04/bdf344d2-2c3d-475b-9235-5ba979f6-removebg-preview_e6b4b2a060424b02838c93bc17f6a937.png', 
    N'https://cdn.authentic-shoes.com/wp-content/uploads/2023/04/296e6641-6166-430a-853d-fff3cb95_43ee127021424c4a81022480271252c1.png', 
    N'https://cdn.authentic-shoes.com/wp-content/uploads/2023/04/55205bb3-95a8-4e30-bf06-28985d8e_8ab2f7e1af8040f38131cfa74ef9b03a.png', 
    N'https://cdn.authentic-shoes.com/wp-content/uploads/2023/04/65c08399-aba0-4457-ac4e-b4542104_1a29fa9a42b54d669c517d97591b838c.png', 
    N'Giày Burberry', N'Giày Burberry Monogram Print Cotton ‘Black White’', 16900000.00, 
    N'What makes the Burberry Monogram Print Cotton so special?', 
    GETDATE(), '05', 5),
(20, 4.5, N'BLACK', GETDATE(), N'KhoHCM', 
    N'Are you ready to celebrate Valentines Day? Whether you have a significant other or not, you shouldnt miss the upcoming release of the Nike Air Max 90 QS Valentines Day 2021. Official images of the Swooshs legendary AM90 design show off the release Brand new wrapped in exciting color arrangements that will make you fall in love.', 22, 
    N'https://cdn.authentic-shoes.com/wp-content/uploads/2023/04/a21-burberry-8042363_bced959d88e540159f2c80d4d1578de9.png', 
    N'https://cdn.authentic-shoes.com/wp-content/uploads/2023/04/ca04x8042363001-c_55016619410b44f2a4214e67c4bfa54e.png', 
    N'https://cdn.authentic-shoes.com/wp-content/uploads/2023/04/image_3681_1_24273_2_36514_7aff6d5866744ba0bbdab919a47deac8.png', 
    N'https://cdn.authentic-shoes.com/wp-content/uploads/2023/04/image_3681_1_24273_2_36513_73bfbbce1bfc48a88e4cfe333f84bda1.png', 
    N'Giày Burberry', N'Giày Burberry Vintage Check Detail Leather Chelsea Boot Black 8042363', 15500000.00, 
    N'What makes the Burberry Vintage Check Detail Leather Chelsea Boot Love Letter so special?', 
    GETDATE(), '05', 5),
(21, 4.5, N'BLACK', GETDATE(), N'KhoHCM', 
    N'Buy 100% authentic Louis Vuitton Major Loafer Black 1A7VZF Shoes available at Authentic Shoes. Free 1-day shipping. Commitment to pay X5 if detected Fake. Free return for size. Lifetime cleaning service. BUY NOW!', 22, 
    N'https://cdn.authentic-shoes.com/wp-content/uploads/2023/08/Screenshot-2023-08-15-at-11.23.19-768x720.png', 
    N'https://cdn.authentic-shoes.com/wp-content/uploads/2023/08/Screenshot-2023-08-15-at-11.22.38.png', 
    N'https://cdn.authentic-shoes.com/wp-content/uploads/2023/08/Screenshot-2023-08-15-at-11.23.06.png', 
    N'https://cdn.authentic-shoes.com/wp-content/uploads/2023/08/Screenshot-2023-08-15-at-11.23.14.png', 
    N'Giày Louis Vuitton', N'Giày Louis Vuitton Major Loafer ‘Black’ 1A7VZF', 25500000.00, 
    N'What makes the Louis Vuitton Vintage Check Detail Leather Chelsea Boot Love Letter so special?', 
    GETDATE(), '05', 5),
(22, 4.0, N'WHITE', GETDATE(), N'KhoHCM', 
    N'Buy 100% authentic Louis Vuitton Major Loafer Black 1A7VZF Shoes available at Authentic Shoes. Free 1-day shipping. Commitment to pay X5 if detected Fake. Free return for size. Lifetime cleaning service. BUY NOW!', 22, 
    N'https://cdn.authentic-shoes.com/wp-content/uploads/2023/04/screenshot_2023.01.31_13.50.20.186_072fcac466c940159e20ac5dff1c6195.png', 
    N'https://cdn.authentic-shoes.com/wp-content/uploads/2023/04/screenshot_2023.01.31_13.50.49.736_44c4eabe7a4742dc8b1a5f50e7c3ae6e.png', 
    N'https://cdn.authentic-shoes.com/wp-content/uploads/2023/04/screenshot_2023.01.31_13.49.37.254_0d74171050bd497795a0a772a1033592.png', 
    N'https://cdn.authentic-shoes.com/wp-content/uploads/2023/04/screenshot_2023.01.31_13.50.52.853_e8aff57c19294249943562ae3e0aee77.png', 
    N'Giày Louis Vuitton', N'Giày Louis Vuitton Trainer ‘Red White’ 1A8PJW', 27500000.00, 
    N'What makes the Louis Vuitton Vintage Check Detail Leather Chelsea Boot Love Letter so special?', 
    GETDATE(), '05', 5),
(23, 4.3, N'GRAY', GETDATE(), N'KhoHCM', 
    N'Buy 100% genuine Dior B27 Low Top Sneaker Olive Nubuck Calfskin with White Dior Oblique Galaxy Leather 3SN272ZML-H660 available at Authentic Shoes. Free 1-day shipping. Commitment to pay X5 if detected Fake. Free return for size. FREE shoe cleaning for life. BUY NOW!', 22, 
    N'https://cdn.authentic-shoes.com/wp-content/uploads/2023/04/1634744325_3sn272zml_h660_e06_zh_27b5481d24764f94aa06c2dca070b13b.png', 
    N'https://cdn.authentic-shoes.com/wp-content/uploads/2023/04/1635529514_3sn272zml_h660_e11_zh_24e771d5e7984650910e0434e0f23fdf.png', 
    N'https://cdn.authentic-shoes.com/wp-content/uploads/2023/04/1634744325_3sn272zml_h660_e05_gh_b78fbd0452634522b627a7222044356a.png', 
    N'https://cdn.authentic-shoes.com/wp-content/uploads/2023/04/1634744325_3sn272zml_h660_e03_gh_0236e07ace4b47a28077a87347527099.png', 
    N'Giày Dior', N'Giày Dior B27 Low Top Sneaker Olive Nubuck Calfskin Galaxy Leather', 32500000.00, 
    N'What makes the Dior Vintage Check Detail Leather Chelsea Boot Love Letter so special?', 
    GETDATE(), '05', 5),
(24, 4.7, N'WHITE', GETDATE(), N'KhoHCM', 
    N'Buy 100% genuine Dior B27 Low Top Sneaker Olive Nubuck Calfskin with White Dior Oblique Galaxy Leather 3SN272ZML-H660 available at Authentic Shoes. Free 1-day shipping. Commitment to pay X5 if detected Fake. Free return for size. FREE shoe cleaning for life. BUY NOW!', 22, 
    N'https://cdn.authentic-shoes.com/wp-content/uploads/2023/04/booauthenticsneaker-dior-b27-low-top-sneaker-3sn272zij-h063-b_c15aa93f4e854be9bd039fd5ea9485b3.png', 
    N'https://cdn.authentic-shoes.com/wp-content/uploads/2023/04/booauthenticsneaker-dior-b27-low-top-sneaker-3sn272zij-h063-c_620442a9292d49ccb0533241168e39d4.png', 
    N'https://cdn.authentic-shoes.com/wp-content/uploads/2023/04/a462b08e3654e_c98b7d0184ad4ec78b5498da4a5b2f6f.png', 
    N'https://cdn.authentic-shoes.com/wp-content/uploads/2023/04/booauthenticsneaker-dior-b27-low-top-sneaker-3sn272zij-h063-d_8281330d926743c2a92feaa8cd893d04.png', 
    N'Giày Dior', N'Giày Dior B27 Low ‘Dior Oblique Galaxy White Red’ 3SN272ZIJ-H063', 29500000.00, 
    N'What makes the Dior Vintage Check Detail Leather Chelsea Boot Love Letter so special?', 
    GETDATE(), '05', 5),
(25, 4.8, N'WHITE', GETDATE(), N'KhoHCM', 
    N'Are you ready to celebrate Valentines Day? Whether you have a significant other or not, you shouldnt miss the upcoming release of the Nike Air Max 90 QS Valentines Day 2021. Official images of the Swooshs legendary AM90 design show off the release Brand new wrapped in exciting color arrangements that will make you fall in love.', 22, 
    N'https://cdn.authentic-shoes.com/wp-content/uploads/2023/04/565deaa26c2e9c9fa56261094b1914b5_6d08985ee37b4df29502ace4fffa7bc3.jpg', 
    N'https://cdn.authentic-shoes.com/wp-content/uploads/2023/04/screenshot_2023.02.21_12.41.00.934_03cb1a14e8434d5ca59f722ad33b87e5.png', 
    N'https://cdn.authentic-shoes.com/wp-content/uploads/2023/04/supreme-nike-air-force-1-white-black-release-date-0_22b5f26ab8c8445eb5c670fff8c791bb.jpg', 
    N'https://cdn.authentic-shoes.com/wp-content/uploads/2023/04/supreme-nike-air-force-1-cu9225-100-release-date-price-2_b63cb2513c0d4765be480908ba70785d.jpg', 
    N'Giày Supreme', N'Giày Nike Air Force 1 Low Supreme “White” CU9225-100', 35500000.00, 
    N'What makes the Supreme Vintage Check Detail Leather Chelsea Boot Love Letter so special?', 
    GETDATE(), '05', 5);
SET IDENTITY_INSERT product OFF;

SET IDENTITY_INSERT product_size ON;

INSERT INTO product_size (id, productid, size, stock, color) VALUES 
(1, 1, '38', 34, N'WHITE'),
(2, 1, '39', 45, N'WHITE'),
(3, 1, '40', 22, N'WHITE'),
(4, 1, '41', 37, N'WHITE'),
(5, 1, '42', 40, N'WHITE'),
(6, 1, '43', 28, N'WHITE');

-- Sản phẩm 2
INSERT INTO product_size (id, productid, size, stock, color) VALUES 
(7, 2, '38', 34, N'PINK'),
(8, 2, '39', 45, N'PINK'),
(9, 2, '40', 22, N'PINK'),
(10, 2, '41', 37, N'PINK'),
(11, 2, '42', 40, N'PINK'),
(12, 2, '43', 28, N'PINK');

-- Sản phẩm 3
INSERT INTO product_size (id, productid, size, stock, color) VALUES 
(13, 3, '38', 30, N'WHITE'),
(14, 3, '39', 42, N'WHITE'),
(15, 3, '40', 35, N'WHITE'),
(16, 3, '41', 29, N'WHITE'),
(17, 3, '42', 50, N'WHITE'),
(18, 3, '43', 33, N'WHITE');

-- Sản phẩm 4
INSERT INTO product_size (id, productid, size, stock, color) VALUES 
(19, 4, '38', 26, N'BLACK'),
(20, 4, '39', 32, N'BLACK'),
(21, 4, '40', 28, N'BLACK'),
(22, 4, '41', 45, N'BLACK'),
(23, 4, '42', 36, N'BLACK'),
(24, 4, '43', 41, N'BLACK');

-- Sản phẩm 5
INSERT INTO product_size (id, productid, size, stock, color) VALUES 
(25, 5, '38', 31, N'RED'),
(26, 5, '39', 27, N'RED'),
(27, 5, '40', 39, N'RED'),
(28, 5, '41', 34, N'RED'),
(29, 5, '42', 46, N'RED'),
(30, 5, '43', 38, N'RED');

-- Sản phẩm 6
INSERT INTO product_size (id, productid, size, stock, color) VALUES 
(31, 6, '38', 48, N'WHITE'),
(32, 6, '39', 41, N'WHITE'),
(33, 6, '40', 43, N'WHITE'),
(34, 6, '41', 36, N'WHITE'),
(35, 6, '42', 50, N'WHITE'),
(36, 6, '43', 37, N'WHITE');

-- Sản phẩm 7
INSERT INTO product_size (id, productid, size, stock, color) VALUES 
(37, 7, '38', 44, N'BLACK'),
(38, 7, '39', 33, N'BLACK'),
(39, 7, '40', 30, N'BLACK'),
(40, 7, '41', 48, N'BLACK'),
(41, 7, '42', 39, N'BLACK'),
(42, 7, '43', 27, N'BLACK');

-- Sản phẩm 8
INSERT INTO product_size (id, productid, size, stock, color) VALUES 
(43, 8, '38', 47, N'GRAY'),
(44, 8, '39', 29, N'GRAY'),
(45, 8, '40', 32, N'GRAY'),
(46, 8, '41', 39, N'GRAY'),
(47, 8, '42', 43, N'GRAY'),
(48, 8, '43', 36, N'GRAY');

-- Sản phẩm 9
INSERT INTO product_size (id, productid, size, stock, color) VALUES 
(49, 9, '38', 35, N'BLUE'),
(50, 9, '39', 28, N'BLUE'),
(51, 9, '40', 47, N'BLUE'),
(52, 9, '41', 40, N'BLUE'),
(53, 9, '42', 33, N'BLUE'),
(54, 9, '43', 44, N'BLUE');

-- Sản phẩm 10
INSERT INTO product_size (id, productid, size, stock, color) VALUES 
(55, 10, '38', 42, N'BLACK'),
(56, 10, '39', 37, N'BLACK'),
(57, 10, '40', 46, N'BLACK'),
(58, 10, '41', 41, N'BLACK'),
(59, 10, '42', 34, N'BLACK'),
(60, 10, '43', 30, N'BLACK');

-- Sản phẩm 11
INSERT INTO product_size (id, productid, size, stock, color) VALUES 
(61, 11, '38', 25, N'WHITE'),
(62, 11, '39', 40, N'WHITE'),
(63, 11, '40', 35, N'WHITE'),
(64, 11, '41', 50, N'WHITE'),
(65, 11, '42', 38, N'WHITE'),
(66, 11, '43', 42, N'WHITE');

-- Sản phẩm 12
INSERT INTO product_size (id, productid, size, stock, color) VALUES 
(67, 12, '38', 44, N'BLACK'),
(68, 12, '39', 28, N'BLACK'),
(69, 12, '40', 41, N'BLACK'),
(70, 12, '41', 45, N'BLACK'),
(71, 12, '42', 39, N'BLACK'),
(72, 12, '43', 31, N'BLACK');

-- Sản phẩm 13
INSERT INTO product_size (id, productid, size, stock, color) VALUES 
(73, 13, '38', 39, N'BLACK'),
(74, 13, '39', 36, N'BLACK'),
(75, 13, '40', 42, N'BLACK'),
(76, 13, '41', 48, N'BLACK'),
(77, 13, '42', 33, N'BLACK'),
(78, 13, '43', 29, N'BLACK');

-- Sản phẩm 14
INSERT INTO product_size (id, productid, size, stock, color) VALUES 
(79, 14, '38', 28, N'WHITE'),
(80, 14, '39', 32, N'WHITE'),
(81, 14, '40', 40, N'WHITE'),
(82, 14, '41', 36, N'WHITE'),
(83, 14, '42', 44, N'WHITE'),
(84, 14, '43', 38, N'WHITE');

-- Sản phẩm 15
INSERT INTO product_size (id, productid, size, stock, color) VALUES 
(85, 15, '38', 30, N'PINK'),
(86, 15, '39', 42, N'PINK'),
(87, 15, '40', 37, N'PINK'),
(88, 15, '41', 44, N'PINK'),
(89, 15, '42', 39, N'PINK'),
(90, 15, '43', 35, N'PINK');

-- Sản phẩm 16
INSERT INTO product_size (id, productid, size, stock, color) VALUES 
(91, 16, '38', 42, N'YELLOW'),
(92, 16, '39', 37, N'YELLOW'),
(93, 16, '40', 44, N'YELLOW'),
(94, 16, '41', 41, N'YELLOW'),
(95, 16, '42', 36, N'YELLOW'),
(96, 16, '43', 34, N'YELLOW');

-- Sản phẩm 17
INSERT INTO product_size (id, productid, size, stock, color) VALUES 
(97, 17, '38', 31, N'BLACK'),
(98, 17, '39', 40, N'BLACK'),
(99, 17, '40', 45, N'BLACK'),
(100, 17, '41', 36, N'BLACK'),
(101, 17, '42', 44, N'BLACK'),
(102, 17, '43', 39, N'BLACK');

-- Sản phẩm 18
INSERT INTO product_size (id, productid, size, stock, color) VALUES 
(103, 18, '38', 36, N'RED'),
(104, 18, '39', 29, N'RED'),
(105, 18, '40', 39, N'RED'),
(106, 18, '41', 47, N'RED'),
(107, 18, '42', 33, N'RED'),
(108, 18, '43', 41, N'RED');

-- Sản phẩm 19
INSERT INTO product_size (id, productid, size, stock, color) VALUES 
(109, 19, '38', 38, N'BLACK'),
(110, 19, '39', 34, N'BLACK'),
(111, 19, '40', 45, N'BLACK'),
(112, 19, '41', 42, N'BLACK'),
(113, 19, '42', 40, N'BLACK'),
(114, 19, '43', 36, N'BLACK');

-- Sản phẩm 20
INSERT INTO product_size (id, productid, size, stock, color) VALUES 
(115, 20, '38', 44, N'BLACK'),
(116, 20, '39', 37, N'BLACK'),
(117, 20, '40', 46, N'BLACK'),
(118, 20, '41', 41, N'BLACK'),
(119, 20, '42', 36, N'BLACK'),
(120, 20, '43', 31, N'BLACK');

-- Sản phẩm 21
INSERT INTO product_size (id, productid, size, stock, color) VALUES 
(121, 21, '38', 42, N'BLACK'),
(122, 21, '39', 45, N'BLACK'),
(123, 21, '40', 50, N'BLACK'),
(124, 21, '41', 35, N'BLACK'),
(125, 21, '42', 38, N'BLACK'),
(126, 21, '43', 41, N'BLACK');

-- Sản phẩm 22
INSERT INTO product_size (id, productid, size, stock, color) VALUES 
(127, 22, '38', 31, N'WHITE'),
(128, 22, '39', 36, N'WHITE'),
(129, 22, '40', 40, N'WHITE'),
(130, 22, '41', 39, N'WHITE'),
(131, 22, '42', 44, N'WHITE'),
(132, 22, '43', 45, N'WHITE');

-- Sản phẩm 23
INSERT INTO product_size (id, productid, size, stock, color) VALUES 
(133, 23, '38', 33, N'GRAY'),
(134, 23, '39', 30, N'GRAY'),
(135, 23, '40', 39, N'GRAY'),
(136, 23, '41', 41, N'GRAY'),
(137, 23, '42', 44, N'GRAY'),
(138, 23, '43', 34, N'GRAY');

-- Sản phẩm 24
INSERT INTO product_size (id, productid, size, stock, color) VALUES 
(139, 24, '38', 38, N'WHITE'),
(140, 24, '39', 42, N'WHITE'),
(141, 24, '40', 47, N'WHITE'),
(142, 24, '41', 39, N'WHITE'),
(143, 24, '42', 45, N'WHITE'),
(144, 24, '43', 33, N'WHITE');

-- Sản phẩm 25
INSERT INTO product_size (id, productid, size, stock, color) VALUES 
(145, 25, '38', 31, N'WHITE'),
(146, 25, '39', 35, N'WHITE'),
(147, 25, '40', 44, N'WHITE'),
(148, 25, '41', 42, N'WHITE'),
(149, 25, '42', 36, N'WHITE'),
(150, 25, '43', 39, N'WHITE');


SET IDENTITY_INSERT product_size off;


SET IDENTITY_INSERT so_luong_da_ban on;

insert into so_luong_da_ban (productid,so_luong_da_ban)
values 
(1,80),
(2,28),
(3,35),
(4,73),
(5,91),
(6,58),
(7,25),
(8,33),
(9,95),
(10,11),
(11,112),
(12,35),
(13,75),
(14,24),
(15,38),
(16,72),
(17,95),
(18,34),
(19,70),
(20,80),
(21,65),
(22,70),
(23,50),
(24,47),
(25,43);

SET IDENTITY_INSERT so_luong_da_ban off;

SET IDENTITY_INSERT review ON;
INSERT INTO review (ma_review, content_review, date_review, updated_at, accountid, productid)
VALUES
(1, N'This product is excellent, very satisfied!', GETDATE(), GETDATE(), 1, 1),
(2, N'The product quality is very good, I am satisfied!', GETDATE(), GETDATE(), 2, 2),
(3, N'Customer service is outstanding!', GETDATE(), GETDATE(), 3, 3),
(4, N'The product matches the description, I really like it!', GETDATE(), GETDATE(), 4, 4),
(5, N'Satisfied with this product, will repurchase!', GETDATE(), GETDATE(), 5, 5),
(6, N'The product quality is okay, price is reasonable.', GETDATE(), GETDATE(), 6, 6),
(7, N'Very satisfied with the product and service!', GETDATE(), GETDATE(), 7, 7),
(8, N'Product is beautiful, delivery is fast!', GETDATE(), GETDATE(), 1, 8),
(9, N'The quality of the product exceeds expectations!', GETDATE(), GETDATE(), 2, 9),
(10, N'The product is not as described, needs improvement.', GETDATE(), GETDATE(), 3, 10),
(11, N'Customer service is very good, quick support!', GETDATE(), GETDATE(), 4, 11),
(12, N'The product seems okay, hope it will last.', GETDATE(), GETDATE(), 5, 12),
(13, N'Fast delivery, product matches the description.', GETDATE(), GETDATE(), 6, 13),
(14, N'The product is good but the price is a bit high.', GETDATE(), GETDATE(), 7, 14),
(15, N'I am very satisfied with this product!', GETDATE(), GETDATE(), 1, 15),
(16, N'Good product quality, will recommend to friends.', GETDATE(), GETDATE(), 2, 16),
(17, N'The product is not as advertised.', GETDATE(), GETDATE(), 3, 17),
(18, N'Delivery service is very fast and on time!', GETDATE(), GETDATE(), 4, 18),
(19, N'The product is good, I am very satisfied!', GETDATE(), GETDATE(), 5, 19),
(20, N'The product matches the description, I really like it!', GETDATE(), GETDATE(), 6, 20),
(21, N'Good quality product, reasonable price.', GETDATE(), GETDATE(), 7, 1),
(22, N'Customer service is good, I am satisfied!', GETDATE(), GETDATE(), 1, 2),
(23, N'The product seems okay, but quality needs improvement.', GETDATE(), GETDATE(), 2, 3),
(24, N'The product is beautiful, I am very satisfied!', GETDATE(), GETDATE(), 3, 4),
(25, N'Good product quality, fast delivery.', GETDATE(), GETDATE(), 4, 5),
(26, N'The product did not meet expectations, needs improvement.', GETDATE(), GETDATE(), 5, 6),
(27, N'Good customer service, I will continue to buy!', GETDATE(), GETDATE(), 6, 7),
(28, N'Excellent product, reasonable price.', GETDATE(), GETDATE(), 7, 8),
(29, N'The product has good quality, and the price is suitable.', GETDATE(), GETDATE(), 1, 9),
(30, N'Fast and convenient delivery service!', GETDATE(), GETDATE(), 2, 10),
(31, N'The product is not as described, not satisfied.', GETDATE(), GETDATE(), 3, 11),
(32, N'The product is beautiful, good quality, fast delivery.', GETDATE(), GETDATE(), 4, 12),
(33, N'The product quality is outstanding, I am very satisfied!', GETDATE(), GETDATE(), 5, 13),
(34, N'The product is as advertised, good service.', GETDATE(), GETDATE(), 6, 14),
(35, N'Customer service is very good, I am satisfied with the product.', GETDATE(), GETDATE(), 7, 15),
(36, N'The product has good quality, but the price is a bit high.', GETDATE(), GETDATE(), 1, 16),
(37, N'The product is very good, I will buy more!', GETDATE(), GETDATE(), 2, 17),
(38, N'The product quality does not meet expectations, needs improvement.', GETDATE(), GETDATE(), 3, 18),
(39, N'Delivery service is very good, product quality is great.', GETDATE(), GETDATE(), 4, 19),
(40, N'The product is beautiful, I am very satisfied with the quality.', GETDATE(), GETDATE(), 5, 20);
SET IDENTITY_INSERT review off;

SET IDENTITY_INSERT invoice ON;

insert into invoice (mahd, accountid, ngay_xuat, product_size_id, status, tong_gia, updated_at)
values 
(1, 1, getDate(), 5, 'PENDING', 132500000.00, getDate()),
(2, 2, getDate(), 10, 'SHIPPED', 200000000.00, getDate()),
(3, 3, getDate(), 15, 'DELIVERED', 180000000.00, getDate()),
(4, 4, getDate(), 20, 'CANCELLED', 150000000.00, getDate()),
(5, 5, getDate(), 25, 'PENDING', 100000000.00, getDate()),
(6, 6, getDate(), 30, 'SHIPPED', 250000000.00, getDate()),
(7, 7, getDate(), 35, 'DELIVERED', 300000000.00, getDate()),
(8, 1, getDate(), 40, 'CANCELLED', 125000000.00, getDate()),
(9, 2, getDate(), 45, 'PENDING', 110000000.00, getDate()),
(10, 3, getDate(), 50, 'SHIPPED', 275000000.00, getDate()),
(11, 4, getDate(), 55, 'DELIVERED', 220000000.00, getDate()),
(12, 5, getDate(), 60, 'CANCELLED', 130000000.00, getDate()),
(13, 6, getDate(), 65, 'PENDING', 195000000.00, getDate()),
(14, 7, getDate(), 70, 'SHIPPED', 310000000.00, getDate()),
(15, 1, getDate(), 75, 'DELIVERED', 240000000.00, getDate()),
(16, 2, getDate(), 80, 'CANCELLED', 105000000.00, getDate()),
(17, 3, getDate(), 85, 'PENDING', 175000000.00, getDate()),
(18, 4, getDate(), 90, 'SHIPPED', 270000000.00, getDate()),
(19, 5, getDate(), 95, 'DELIVERED', 215000000.00, getDate()),
(20, 6, getDate(), 100, 'CANCELLED', 135000000.00, getDate()),
(21, 7, getDate(), 105, 'PENDING', 150000000.00, getDate()),
(22, 1, getDate(), 110, 'SHIPPED', 220000000.00, getDate()),
(23, 2, getDate(), 115, 'DELIVERED', 185000000.00, getDate()),
(24, 3, getDate(), 120, 'CANCELLED', 160000000.00, getDate()),
(25, 4, getDate(), 125, 'PENDING', 140000000.00, getDate()),
(26, 5, getDate(), 130, 'SHIPPED', 195000000.00, getDate()),
(27, 6, getDate(), 135, 'DELIVERED', 210000000.00, getDate()),
(28, 7, getDate(), 140, 'CANCELLED', 175000000.00, getDate()),
(29, 1, getDate(), 145, 'PENDING', 160000000.00, getDate()),
(30, 2, getDate(), 150, 'SHIPPED', 205000000.00, getDate());

SET IDENTITY_INSERT invoice OFF;



-- Cập nhật giá trị productCount trong bảng Category
UPDATE Category 
SET product_count = (
    SELECT COUNT(*)
    FROM Product p
    WHERE p.model= cname
);

-- Trigger để cập nhật productCount khi thêm hoặc cập nhật sản phẩm
CREATE TRIGGER UpdateProductCount
ON Product
AFTER INSERT, DELETE
AS
BEGIN
    -- Cập nhật khi có sản phẩm mới được thêm vào hoặc xóa
    UPDATE Category
    SET product_count = (
        SELECT COUNT(*)
        FROM Product p
         WHERE p.model= cname
    );
END;








