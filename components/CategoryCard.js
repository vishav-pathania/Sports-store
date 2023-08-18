import Link from 'next/link';

const CategoryCard = ({ title, imageSrc, link }) => {
  return (
    <Link href={link}>
      <div className="category-card cursor-pointer ">
        <h2 className="mt-2 text-center">{title}</h2>
        <img src={imageSrc} alt={`${title} Sports`} className="w-16 md:w-32 lg:w-48 h-24 md:h-64 rounded-lg" />
      </div>
    </Link>
  );
};

export default CategoryCard;
