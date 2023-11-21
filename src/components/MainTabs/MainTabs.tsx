import { Fragment, useState } from 'react';
import { Tab } from '@headlessui/react';
import ModelSkeleton from '@/components/ModelSkeleton/ModelSkeleton';
import ModelCard from '@/components/ModelCard/ModelCard';
import { useGetModelsQuery } from '@/features/models/modelsApi';
import { models } from '@/mockData/models';

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}

export const MainTabs = () => {
  let [categories] = useState({
    AllModels: models,
    Realistic: models,
    Anime: [],
  });

  const { data: allModels, error, isLoading } = useGetModelsQuery();

  if (error) {
    console.log(error);
  }

  const listOfModelsUI = (models: any[]) =>
    models.map((model, i) => {
      return (
        <div key={i} className="flex justify-center">
          <ModelCard model={model} />
        </div>
      );
    });

  const listOfSkeletonUI = () =>
    Array(8)
      .fill(0)
      .map((_, i) => {
        return (
          <Fragment key={i}>
            <ModelSkeleton />
          </Fragment>
        );
      });

  return (
    <Tab.Group>
      <Tab.List className="flex justify-center mx-auto w-[450px] sm:w-full rounded-full bg-[#F4F6F9] p-1">
        {Object.keys(categories).map((category) => (
          <Tab
            key={category}
            className={({ selected }) =>
              classNames(
                'w-full rounded-full py-2.5 text-sm font-medium leading-5',
                ' ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none  focus:ring-2',
                selected ? 'bg-white text-blue shadow' : 'hover:text-blue',
              )
            }
          >
            {category}
          </Tab>
        ))}
      </Tab.List>
      <Tab.Panels>
        {Object.values(categories).map((posts, idx) => (
          <Tab.Panel
            key={idx}
            className={
              'grid grid-cols-4 m-5 gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center'
            }
          >
            {isLoading ? listOfSkeletonUI() : listOfModelsUI(allModels)}
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
};
