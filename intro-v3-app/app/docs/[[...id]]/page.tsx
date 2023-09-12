const DocsIdPage = ({ params }) => {
  console.log(params);
  return (
    <div>
      Id {params.id} {params.title}
    </div>
  );
};

export default DocsIdPage;
