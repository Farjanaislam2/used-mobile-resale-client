import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmModal from '../../Home/Shared/ConfirmModal/ConfirmModal';
import Loading from '../../Home/Shared/Loading/Loading';

const Report = () => {

    const [deletedReport, setDeletedReport] = useState(null);

    const { data: reported = [], refetch } = useQuery({
        queryKey: ["reported"],
        queryFn: async () => {
            const res = await fetch('https://used-product-resale-market-server.vercel.app/reportedProducts', {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json()
            return data;
        }
    })

    const closeModal = () => {
        setDeletedReport(null);
    }

    const handleDeletdReport = report => {
        fetch(`https://used-product-resale-market-server.vercel.app/reportedProducts/${report._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(`Successfully deleted ${report.productName}`)
                }
            })
    }
    
    if (!reported.length) {
        <Loading></Loading>
    }
    return (
        <div>
            <h1 className='my-5 text-2xl text-red-500 font-bold'>Total Reported Product: {reported.length}</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Photo</th>
                            <th>Model</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reported.map((report, i) => <tr
                                key={report._id}>
                                <th>{i + 1}</th>
                                <td>
                                    <div className="avatar">
                                        <div className="w-16 rounded-full">
                                            <img src={report.picture} alt='' />
                                        </div>
                                    </div>
                                </td>
                                <td>{report.productName}</td>
                                <td>{report.sellingPrice}</td>
                                <td>
                                    <label onClick={() => setDeletedReport(report)} htmlFor="confirm-modal" className="btn btn-sm btn-error hover:bg-red-600">Deleted</label>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deletedReport && <ConfirmModal
                    title={`Are you sure want to delete?`}
                    message={`If you delete ${deletedReport.productName}, it can't be undone.`}
                    closeModal={closeModal}
                    modalData={deletedReport}
                    successAction={handleDeletdReport}
                    succesButtonName='Delete'
                ></ConfirmModal>
            }
        </div>
    );
};

export default Report;