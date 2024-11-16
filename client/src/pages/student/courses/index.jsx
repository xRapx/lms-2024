/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Label } from "@/components/ui/label";
import { Skeleton } from "@/components/ui/skeleton";
//
import { filterOptions, sortOptions } from "@/config";
import image from "/src/assets/image/image1.png";

//
import { ArrowUpDownIcon } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

function StudentViewCoursesPage() {
  const [sort, setSort] = useState("price-lowtohigh");
  const [filters, setFilters] = useState({});

  function handleFilterOnChange() {}

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">All Courses</h1>
      <div className="flex flex-col md:flex-row gap-4">
        <aside className="w-full md:w-64 space-y-4">
          <div>
            {Object.keys(filterOptions).map((ketItem, index) => (
              <div className="p-4 border-b" key={index}>
                <h3 className="font-bold mb-3">{ketItem.toUpperCase()}</h3>
                <div className="grid gap-2 mt-2">
                  {filterOptions[ketItem].map((option) => (
                    <Label className="flex font-medium items-center gap-3">
                      <Checkbox
                        checked={
                          filters &&
                          Object.keys(filters).length > 0 &&
                          filters[ketItem] &&
                          filters[ketItem].indexOf(option.id) > -1
                        }
                        onCheckedChange={() =>
                          handleFilterOnChange(ketItem, option)
                        }
                      />
                      {option.label}
                    </Label>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </aside>
        <main className="flex-1">
          <div className="flex justify-end items-center mb-4 gap-5">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2 p-5"
                >
                  <ArrowUpDownIcon className="h-4 w-4" />
                  <span className="text-[16px] font-medium">Sort By</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-[180px]">
                <DropdownMenuRadioGroup
                  value={sort}
                  onValueChange={(value) => setSort(value)}
                >
                  {sortOptions.map((sortItem) => (
                    <DropdownMenuRadioItem
                      value={sortItem.id}
                      key={sortItem.id}
                    >
                      {sortItem.label}
                    </DropdownMenuRadioItem>
                  ))}
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
            <span className="text-sm text-black font-bold">Results</span>
          </div>
          {/* Content */}
          <Link to="/course/details">
            <div className="space-y-4">
              <Card className="cursor-pointer">
                <CardContent className="flex gap-4 p-4">
                  <div className="w-48 h-32 flex-shrink-0">
                    <img src={image} className="w-ful h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2">Title</CardTitle>
                    <p className="text-sm text-gray-600 mb-1">
                      Created By{" "}
                      <span className="font-bold">Introduction Name</span>
                    </p>
                    <p className="text-[16px] text-gray-600 mt-3 mb-2">
                      Curriculum
                    </p>
                    <p className="font-bold text-lg">$300</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </Link>
          <div className="space-y-4 mt-4">
            <Card className="cursor-pointer">
              <CardContent className="flex gap-4 p-4">
                <div className="w-48 h-32 flex-shrink-0">
                  <img src={image} className="w-ful h-full object-cover" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-xl mb-2">Title</CardTitle>
                  <p className="text-sm text-gray-600 mb-1">
                    Created By{" "}
                    <span className="font-bold">Introduction Name</span>
                  </p>
                  <p className="text-[16px] text-gray-600 mt-3 mb-2">
                    Curriculum
                  </p>
                  <p className="font-bold text-lg">$300</p>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="space-y-4 mt-4">
            <Card className="cursor-pointer">
              <CardContent className="flex gap-4 p-4">
                <div className="w-48 h-32 flex-shrink-0">
                  <img src={image} className="w-ful h-full object-cover" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-xl mb-2">Title</CardTitle>
                  <p className="text-sm text-gray-600 mb-1">
                    Created By{" "}
                    <span className="font-bold">Introduction Name</span>
                  </p>
                  <p className="text-[16px] text-gray-600 mt-3 mb-2">
                    Curriculum
                  </p>
                  <p className="font-bold text-lg">$300</p>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="space-y-4 mt-4">
            <Card className="cursor-pointer">
              <CardContent className="flex gap-4 p-4">
                <div className="w-48 h-32 flex-shrink-0">
                  <img src={image} className="w-ful h-full object-cover" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-xl mb-2">Title</CardTitle>
                  <p className="text-sm text-gray-600 mb-1">
                    Created By{" "}
                    <span className="font-bold">Introduction Name</span>
                  </p>
                  <p className="text-[16px] text-gray-600 mt-3 mb-2">
                    Curriculum
                  </p>
                  <p className="font-bold text-lg">$300</p>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="space-y-4 mt-4">
            <Card className="cursor-pointer">
              <CardContent className="flex gap-4 p-4">
                <div className="w-48 h-32 flex-shrink-0">
                  <img src={image} className="w-ful h-full object-cover" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-xl mb-2">Title</CardTitle>
                  <p className="text-sm text-gray-600 mb-1">
                    Created By{" "}
                    <span className="font-bold">Introduction Name</span>
                  </p>
                  <p className="text-[16px] text-gray-600 mt-3 mb-2">
                    Curriculum
                  </p>
                  <p className="font-bold text-lg">$300</p>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="space-y-4 mt-4">
            <Card className="cursor-pointer">
              <CardContent className="flex gap-4 p-4">
                <div className="w-48 h-32 flex-shrink-0">
                  <img src={image} className="w-ful h-full object-cover" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-xl mb-2">Title</CardTitle>
                  <p className="text-sm text-gray-600 mb-1">
                    Created By{" "}
                    <span className="font-bold">Introduction Name</span>
                  </p>
                  <p className="text-[16px] text-gray-600 mt-3 mb-2">
                    Curriculum
                  </p>
                  <p className="font-bold text-lg">$300</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}

export default StudentViewCoursesPage;
