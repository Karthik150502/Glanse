-- CreateTable
CREATE TABLE "food_category" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(191) NOT NULL,
    "description" VARCHAR(200) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "food_category_pkey" PRIMARY KEY ("id")
);
