import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import banner from "/src/assets/image/banner-img.png";

const CardItem = ({currentItem ,handleCourseNavigate}) => {
  return (
    <Card className="w-full max-w-sm overflow-hidden">
      <CardHeader className="p-0">
        <div className="relative h-48 w-full">
          <img
            src={banner}
            alt={`course image`}
            className="object-cover layout-fill"
          />
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-sm font-medium text-blue-600">
            certificateName
          </span>
          <span className="text-sm text-gray-500">subject</span>
        </div>
        <CardTitle className="mb-2 text-xl">courseName</CardTitle>
        <p className="text-sm text-gray-600">description</p>
      </CardContent>
      <CardFooter className="p-4">
        <Button className="w-full">View Details</Button>
      </CardFooter>
    </Card>
  );
};

export default CardItem;
