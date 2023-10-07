import Link from 'next/link';

const CategoryCard = ({ title, imageSrc, link }) => {
  return (
    <Link href={link}>
      <div className="category-card cursor-pointer ">
        <h2 className="my-2 semi-bold lg:text-lg sm:text-sm text-center">{title}</h2>
        <img src={imageSrc} alt={`${title} Sports`} className="w-16 md:w-32 lg:w-48 h-22 md:h-64 rounded-lg" />
      </div>
    </Link>
  );
};

export default CategoryCard;
