const ArticlesSection = () => {
    const articles = [
      { title: '十年树人表卓越，未来精英彰慈善 (下)', url: 'https://www.chinesecanadianvoice.ca/110070/' },
      { title: "Merit's 5th Year Anniversary & Holiday Fundraiser for UNICEF", url: 'https://www.facebook.com/MeritEducation' },
      { title: '2016 Charity Night Raises $14,310 for UNICEF and Markham Stouffville Hospital', url: 'https://meriteducation.expancio.com/blog/post/5e221e7cbbde503ac393a63e' },
      { title: '财富人生鼎力赞助2016卓越慈善之夜', url: 'http://www.happylifewealth.com/newsshow.php?id=22' },
      { title: '青年才俊领衔“2016卓越慈善之夜”', url: 'http://www.ccbestlink.com/wap/info/commu_infos/20160512/9004.html' },
      { title: '青年才俊领衔“2017卓越慈善之夜”逾万善款献爱心', url: 'http://www.youknownews.com/wap/bencandy.php?fid=3&id=2142' },
    ];
  
    return (
      <section className="px-8 py-10 bg-secondary-green shadow-lg rounded-xl m-5">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 border-b-4 border-green-900 pb-2">
          Articles
        </h2>
        <ul className="space-y-6">
          {articles.map((article, index) => (
            <li
              key={index}
              className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <a
                href={article.url}
                className="font-semibold text-green-shade hover:text-green-900 underline transition-colors duration-200"
              >
                {article.title}
              </a>
            </li>
          ))}
        </ul>
      </section>
    );
  };
  
  export default ArticlesSection;
  