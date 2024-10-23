-- AlterTable
ALTER TABLE "dish" ADD COLUMN     "imageKey" TEXT;

-- AlterTable
ALTER TABLE "dish_combo" ADD COLUMN     "imageKey" TEXT;

-- AlterTable
ALTER TABLE "food_category" ADD COLUMN     "imageKey" TEXT;

-- AlterTable
ALTER TABLE "restaurant" ADD COLUMN     "imageKey" TEXT,
ALTER COLUMN "image" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "imageKey" TEXT;
