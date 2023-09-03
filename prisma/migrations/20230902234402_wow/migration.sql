-- CreateTable
CREATE TABLE "Paste" (
    "id" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "syntax" TEXT NOT NULL,
    "delete" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Paste_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Paste_delete_key" ON "Paste"("delete");
