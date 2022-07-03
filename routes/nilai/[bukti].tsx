/** @jsx h */
import {h} from 'preact'
import {PageProps} from '$fresh/server.ts';

export default function Bukti(props:PageProps){
    const {bukti} = props.params
    return (
        <div>bukti {bukti}</div>
    )
}