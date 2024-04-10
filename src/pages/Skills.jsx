export default function Skills() {
  return (
    <>
      <div className="w-full mt-5">
        <h1 className="text-xl font-semibold border-b-2 pb-1 w-fit mb-5">
          Skills
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="rounded-md bg-neutral-900 p-3 pb-4 flex-1 flex flex-col gap-4 shadow-sm hover:shadow-md">
            <h2 className="text-lg font-semibold lg:font-medium pb-1 border-b border-neutral-500">
              Data Storage
            </h2>
            <div className="flex flex-wrap gap-2 ">
              <p className="rounded-md text-[14px] bg-blue-500 px-2 py-1.5">
                Azure Storage account
              </p>
              <p className="rounded-md text-[14px] bg-neutral-950 px-2 py-1.5">
                Azure Cosmos DB
              </p>
              <p className="rounded-md text-[14px] bg-red-500 px-2 py-1.5">
                Azure Data Lake
              </p>
              <p className="rounded-md text-[14px]  bg-orange-500  px-2 py-1.5">
                Azure SQL
              </p>
              <p className="rounded-md text-[14px]  bg-green-500  px-2 py-1.5">
                Azure Synapse Analytics
              </p>
              
              
            </div>
          </div>
          <div className="rounded-md bg-neutral-900 p-3 pb-4 flex-1 flex flex-col gap-4 shadow-sm hover:shadow-md">
            <h2 className="text-lg font-semibold lg:font-medium pb-1 border-b border-neutral-500">
              Data Transformation
            </h2>
            <div className="flex flex-wrap gap-2">
              <p className="rounded-md text-[14px]  bg-blue-500  px-2 py-1.5">
                Azure Data Factory
              </p>
              <p className="rounded-md text-[14px]  bg-green-500  px-2 py-1.5">
                Azure Databricks
              </p>
              <p className="rounded-md text-[14px]  bg-neutral-950  px-2 py-1.5">
                Azure Stream Analytics
              </p>
              <p className="rounded-md text-[14px]  bg-red-500  px-2 py-1.5">
                Azure HD Insight
              </p>
            </div>
          </div>



         



          <div className="rounded-md bg-neutral-900 p-3 pb-4 flex-1 flex flex-col gap-4 shadow-sm hover:shadow-md">
            <h2 className="text-lg font-semibold lg:font-medium pb-1 border-b border-neutral-500">
            Programming Languages
            </h2>
            <div className="flex flex-wrap gap-2">
              <p className="rounded-md text-[14px]  bg-green-500  px-2 py-1.5">
                Python
              </p>
              <p className="rounded-md text-[14px]  bg-yellow-500  px-2 py-1.5">
                SQL
              </p>
              <p className="rounded-md text-[14px]  bg-red-500  px-2 py-1.5">
                Pyspark
              </p>
            </div>
          </div>


          <div className="rounded-md bg-neutral-900 p-3 pb-4 flex-1 flex flex-col gap-4 shadow-sm hover:shadow-md">
            <h2 className="text-lg font-semibold lg:font-medium pb-1 border-b border-neutral-500">
              Database
            </h2>
            <div className="flex flex-wrap gap-2">
             
              <p className="rounded-md text-[14px] bg-red-500  px-2 py-1.5">
                MySql
              </p>
            </div>
          </div>

          <div className="rounded-md bg-neutral-900 p-3 pb-10 flex-1 flex flex-col gap-4 shadow-sm hover:shadow-md">
  <h2 className="text-lg font-semibold lg:font-medium pb-1 border-b border-neutral-500">
    Big Data
  </h2>
  <div className="flex flex-wrap gap-2">
    <p className="rounded-md text-[14px]  bg-green-500  px-2 py-1.5">
      Big Data Fundamentals
    </p>
    <p className="rounded-md text-[14px]  bg-neutral-950  px-2 py-1.5">
      Hadoop
    </p>
    <p className="rounded-md text-[12px]  bg-red-500  px-2 py-1.5">
      Data modeling and Data Warehousing
    </p>
    <p className="rounded-md text-[14px]  bg-red-500  px-2 py-1.5">
      SDLC
    </p>
    <p className="rounded-md text-[14px]  bg-blue-500  px-2 py-1.5">
      Apache Spark
    </p>
  </div>
</div>


          
          
        

      

          <div className="rounded-md bg-neutral-900 p-3 pb-10 flex-1 flex flex-col gap-4 shadow-sm hover:shadow-md">
            <h2 className="text-lg font-semibold lg:font-medium pb-1 border-b border-neutral-500">
              Version_control
            </h2>
            <div className="flex flex-wrap gap-2">
              <p className="rounded-md text-[14px]  bg-green-500  px-2 py-1.5">
                Git
              </p>
              <p className="rounded-md text-[14px]  bg-red-500  px-2 py-1.5">
                Github
              </p>
            </div>
          </div>

      

  


          <div className="rounded-md bg-neutral-900 p-3 pb-10 flex-1 flex flex-col gap-4 shadow-sm hover:shadow-md">
            <h2 className="text-lg font-semibold lg:font-medium pb-1 border-b border-neutral-500">
              Operating System
            </h2>
            <div className="flex flex-wrap gap-2">
              <p className="rounded-md text-[14px]  bg-green-500  px-2 py-1.5">
                Windows
              </p>
              <p className="rounded-md text-[14px]  bg-red-500  px-2 py-1.5">
                Linux
              </p>
            </div>
          </div>


        </div>
      </div>
    </>
  );
}
