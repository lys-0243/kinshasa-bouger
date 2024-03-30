/*
  Warnings:

  - Added the required column `commune` to the `Comment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Comment" ADD COLUMN     "commune" VARCHAR(255) NOT NULL;
