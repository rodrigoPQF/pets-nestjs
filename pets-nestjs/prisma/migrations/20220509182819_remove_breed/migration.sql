/*
  Warnings:

  - You are about to drop the `Breed` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Breed" DROP CONSTRAINT "Breed_breed_fkey";

-- DropTable
DROP TABLE "Breed";
