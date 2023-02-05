function CertificationDetails() {
  return null;
}
export default CertificationDetails;
export async function getServerSideProps(context: any) {
  const { params } = context;
  const id = params['page-financement'].substring(params['page-financement'].lastIndexOf("-") + 1);
  return { props: { ...params, id } };
}