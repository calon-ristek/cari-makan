-- CreateEnum
CREATE TYPE "Spot" AS ENUM ('RIK', 'FPSI', 'FISIP', 'FEB', 'FH', 'FMIPA', 'FT', 'FKM', 'VOKASI', 'FASILKOM_LAMA', 'FASILKOM_BARU', 'ASRAMA');

-- CreateTable
CREATE TABLE "Kantin" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "faculty" "Spot" NOT NULL,
    "bookmarkId" TEXT,
    "embedUrl" TEXT NOT NULL,

    CONSTRAINT "Kantin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Reply" (
    "reviewUserId" TEXT NOT NULL,
    "reviewKantinId" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Reply_pkey" PRIMARY KEY ("userId","reviewUserId","reviewKantinId")
);

-- CreateTable
CREATE TABLE "Review" (
    "userId" TEXT NOT NULL,
    "kantinId" TEXT NOT NULL,
    "score" DOUBLE PRECISION NOT NULL,
    "message" TEXT,
    "anonymous" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Review_pkey" PRIMARY KEY ("userId","kantinId")
);

-- CreateTable
CREATE TABLE "Upvote" (
    "userId" TEXT NOT NULL,
    "reviewId" TEXT NOT NULL,
    "reviewUserId" TEXT NOT NULL,
    "reviewKantinId" TEXT NOT NULL,

    CONSTRAINT "Upvote_pkey" PRIMARY KEY ("userId","reviewId")
);

-- CreateTable
CREATE TABLE "Downvote" (
    "userId" TEXT NOT NULL,
    "reviewId" TEXT NOT NULL,
    "reviewUserId" TEXT NOT NULL,
    "reviewKantinId" TEXT NOT NULL,

    CONSTRAINT "Downvote_pkey" PRIMARY KEY ("userId","reviewId")
);

-- CreateTable
CREATE TABLE "Bookmark" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Bookmark_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tag" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Tag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TagKantin" (
    "kantinId" TEXT NOT NULL,
    "tagId" TEXT NOT NULL,

    CONSTRAINT "TagKantin_pkey" PRIMARY KEY ("tagId","kantinId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Kantin_name_key" ON "Kantin"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Bookmark_userId_key" ON "Bookmark"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Tag_name_key" ON "Tag"("name");

-- AddForeignKey
ALTER TABLE "Kantin" ADD CONSTRAINT "Kantin_bookmarkId_fkey" FOREIGN KEY ("bookmarkId") REFERENCES "Bookmark"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reply" ADD CONSTRAINT "Reply_reviewUserId_reviewKantinId_fkey" FOREIGN KEY ("reviewUserId", "reviewKantinId") REFERENCES "Review"("userId", "kantinId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reply" ADD CONSTRAINT "Reply_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_kantinId_fkey" FOREIGN KEY ("kantinId") REFERENCES "Kantin"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Upvote" ADD CONSTRAINT "Upvote_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Upvote" ADD CONSTRAINT "Upvote_reviewUserId_reviewKantinId_fkey" FOREIGN KEY ("reviewUserId", "reviewKantinId") REFERENCES "Review"("userId", "kantinId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Downvote" ADD CONSTRAINT "Downvote_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Downvote" ADD CONSTRAINT "Downvote_reviewUserId_reviewKantinId_fkey" FOREIGN KEY ("reviewUserId", "reviewKantinId") REFERENCES "Review"("userId", "kantinId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bookmark" ADD CONSTRAINT "Bookmark_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TagKantin" ADD CONSTRAINT "TagKantin_kantinId_fkey" FOREIGN KEY ("kantinId") REFERENCES "Kantin"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TagKantin" ADD CONSTRAINT "TagKantin_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;
